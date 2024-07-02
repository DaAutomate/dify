import logging
import time
from datetime import timedelta
from typing import Optional

from core.errors.error import QuotaExceededError
from extensions.ext_redis import redis_client

logger = logging.getLogger(__name__)


class RateLimit:
    _ACTIVE_REQUESTS_COUNT_KEY = "dify:rate_limit:{}:active_requests_count"
    _ACTIVE_REQUESTS = "dify:rate_limit:{}:active_requests"
    _UNLIMITED_REQUEST_ID = "unlimited_request_id"
    _REQUEST_MAX_ALIVE_TIME = 10 * 60  # 10 minutes
    _ACTIVE_REQUESTS_COUNT_FLUSH_INTERVAL = 5 * 60  # recalculate request_count from request_detail every 5 minutes
    _instance_dict = {}

    def __new__(cls: type['RateLimit'], client_id: str, max_active_requests: int):
        if client_id not in cls._instance_dict:
            instance = super().__new__(cls)
            cls._instance_dict[client_id] = instance
        return cls._instance_dict[client_id]

    def __init__(self, client_id: str, max_active_requests: int):
        if hasattr(self, 'initialized'):
            return
        self.initialized = True
        self.client_id = client_id
        self.max_active_requests = max_active_requests
        self.active_requests_count_key = self._ACTIVE_REQUESTS_COUNT_KEY.format(client_id)
        self.active_requests_key = self._ACTIVE_REQUESTS.format(client_id)
        self.active_requests_count = 0
        self.last_recalculate_time = float('-inf')
        self.recalculate_active_requests_count()

    def recalculate_active_requests_count(self):
        if self.max_active_requests <= 0:
            return
        if not redis_client.exists(self.active_requests_key):
            self.active_requests_count = 0
            return
        redis_client.expire(self.active_requests_key, timedelta(days=1))
        redis_client.expire(self.active_requests_count_key, timedelta(days=1))
        request_details = redis_client.hgetall(self.active_requests_key)
        timeout_requests = [k for k, v in request_details.items() if time.time() - float(v.decode('utf-8')) > RateLimit._REQUEST_MAX_ALIVE_TIME]
        if timeout_requests:
            redis_client.hdel(self.active_requests_key, *timeout_requests)
        self.active_requests_count = redis_client.hlen(self.active_requests_key)
        redis_client.set(self.active_requests_count_key, self.active_requests_count, ex=timedelta(days=1))
        self.last_recalculate_time = time.time()

    def enter(self, request_id: Optional[str] = None) -> str:
        if self.max_active_requests <= 0:
            return RateLimit._UNLIMITED_REQUEST_ID
        if not request_id:
            request_id = self._gen_request_key()
        redis_client.hset(self.active_requests_key, request_id, str(time.time()))
        self.active_requests_count = redis_client.incr(self.active_requests_count_key)
        if time.time() - self.last_recalculate_time > RateLimit._ACTIVE_REQUESTS_COUNT_FLUSH_INTERVAL:
            self.recalculate_active_requests_count()
        if self.active_requests_count > self.max_active_requests:
            raise QuotaExceededError("Request limit exceeded, max: {}".format(self.max_active_requests))
        return request_id

    def exit(self, request_id: str):
        if request_id == RateLimit._UNLIMITED_REQUEST_ID:
            return
        redis_client.hdel(self.active_requests_key, request_id)
        self.active_requests_count = redis_client.decr(self.active_requests_count_key)
        if self.active_requests_count < 0:
            self.active_requests_count = 0
            redis_client.set(self.active_requests_count_key, 0)
