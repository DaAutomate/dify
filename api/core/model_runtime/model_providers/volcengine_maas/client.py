import re
from collections.abc import Callable, Generator
from typing import cast

from core.model_runtime.entities.message_entities import (
    AssistantPromptMessage,
    ImagePromptMessageContent,
    PromptMessage,
    PromptMessageContentType,
    SystemPromptMessage,
    UserPromptMessage,
)
from core.model_runtime.model_providers.volcengine_maas.errors import wrap_error
from core.model_runtime.model_providers.volcengine_maas.volc_sdk import ChatRole, MaasException, MaasService


class MaaSClient(MaasService):
    endpoint_id: str

    def __init__(self, host: str, region: str):
        super().__init__(host, region)

    @classmethod
    def from_credential(cls, credentials: dict) -> 'MaaSClient':
        host = credentials['api_endpoint_host']
        region = credentials['volc_region']
        ak = credentials['volc_access_key_id']
        sk = credentials['volc_secret_access_key']
        endpoint_id = credentials['endpoint_id']

        client = cls(host, region)
        client.endpoint_id = endpoint_id
        client.set_ak(ak)
        client.set_sk(sk)
        return client

    def chat(self, params: dict, messages: list[PromptMessage], stream=False) -> Generator | dict:
        req = {
            'parameters': params,
            'messages': [self.convert_prompt_message_to_maas_message(prompt) for prompt in messages]
        }
        if not stream:
            return super().chat(
                self.endpoint_id,
                req,
            )
        return super().stream_chat(
            self.endpoint_id,
            req,
        )

    def embeddings(self, texts: list[str]) -> dict:
        req = {
            'input': texts
        }
        return super().embeddings(self.endpoint_id, req)

    @staticmethod
    def convert_prompt_message_to_maas_message(message: PromptMessage) -> dict:
        if isinstance(message, UserPromptMessage):
            message = cast(UserPromptMessage, message)
            if isinstance(message.content, str):
                message_dict = {"role": ChatRole.USER,
                                "content": message.content}
            else:
                content = []
                for message_content in message.content:
                    if message_content.type == PromptMessageContentType.TEXT:
                        raise ValueError(
                            'Content object type only support image_url')
                    elif message_content.type == PromptMessageContentType.IMAGE:
                        message_content = cast(
                            ImagePromptMessageContent, message_content)
                        image_data = re.sub(
                            r'^data:image\/[a-zA-Z]+;base64,', '', message_content.data)
                        content.append({
                            'type': 'image_url',
                            'image_url': {
                                'url': '',
                                'image_bytes': image_data,
                                'detail': message_content.detail,
                            }
                        })

                message_dict = {'role': ChatRole.USER, 'content': content}
        elif isinstance(message, AssistantPromptMessage):
            message = cast(AssistantPromptMessage, message)
            message_dict = {'role': ChatRole.ASSISTANT,
                            'content': message.content}
        elif isinstance(message, SystemPromptMessage):
            message = cast(SystemPromptMessage, message)
            message_dict = {'role': ChatRole.SYSTEM,
                            'content': message.content}
        else:
            raise ValueError(f"Got unknown PromptMessage type {message}")

        return message_dict

    @staticmethod
    def wrap_exception(fn: Callable[[], dict | Generator]) -> dict | Generator:
        try:
            resp = fn()
        except MaasException as e:
            raise wrap_error(e)

        return resp
