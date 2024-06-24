from pydantic import BaseModel

from configs.extra.feishuwiki_config import FeishuWikiConfig
from configs.extra.notion_config import NotionConfig
from configs.extra.sentry_config import SentryConfig


class ExtraServiceConfig(
    # place the configs in alphabet order
    FeishuWikiConfig,
    NotionConfig,
    SentryConfig,
):
    pass
