import json
import logging
from json import JSONDecodeError
from typing import Type

import anthropic
from langchain.chat_models import ChatAnthropic
from langchain.schema import HumanMessage

from core.helper import encrypter
from core.model_providers.models.base import BaseProviderModel
from core.model_providers.models.entity.model_params import ModelKwargsRules, KwargRule
from core.model_providers.models.llm.anthropic_model import AnthropicModel
from core.model_providers.models.llm.base import ModelType
from core.model_providers.providers.base import BaseModelProvider, CredentialsValidateFailedError
from core.model_providers.providers.hosted import hosted_model_providers
from models.provider import ProviderType


class AnthropicProvider(BaseModelProvider):

    @property
    def provider_name(self):
        """
        Returns the name of a provider.
        """
        return 'anthropic'

    def _get_fixed_model_list(self, model_type: ModelType) -> list[dict]:
        if model_type == ModelType.TEXT_GENERATION:
            return [
                {
                    'id': 'claude-instant-1',
                    'name': 'claude-instant-1',
                },
                {
                    'id': 'claude-2',
                    'name': 'claude-2',
                    'features': [
                        ModelFeature.AGENT_THOUGHT.value
                    ]
                },
            ]
        else:
            return []

    def get_model_class(self, model_type: ModelType) -> Type[BaseProviderModel]:
        """
        Returns the model class.

        :param model_type:
        :return:
        """
        if model_type == ModelType.TEXT_GENERATION:
            model_class = AnthropicModel
        else:
            raise NotImplementedError

        return model_class

    def get_model_parameter_rules(self, model_name: str, model_type: ModelType) -> ModelKwargsRules:
        """
        get model parameter rules.

        :param model_name:
        :param model_type:
        :return:
        """
        return ModelKwargsRules(
            temperature=KwargRule(min=0, max=1, default=1),
            top_p=KwargRule(min=0, max=1, default=0.7),
            presence_penalty=KwargRule(enabled=False),
            frequency_penalty=KwargRule(enabled=False),
            max_tokens=KwargRule(alias="max_tokens_to_sample", min=10, max=100000, default=256),
        )

    @classmethod
    def is_provider_credentials_valid_or_raise(cls, credentials: dict):
        """
        Validates the given credentials.
        """
        if 'anthropic_api_key' not in credentials:
            raise CredentialsValidateFailedError('Anthropic API Key must be provided.')

        try:
            credential_kwargs = {
                'anthropic_api_key': credentials['anthropic_api_key']
            }

            if 'anthropic_api_url' in credentials:
                credential_kwargs['anthropic_api_url'] = credentials['anthropic_api_url']

            chat_llm = ChatAnthropic(
                model='claude-instant-1',
                max_tokens_to_sample=10,
                temperature=0,
                default_request_timeout=60,
                **credential_kwargs
            )

            messages = [
                HumanMessage(
                    content="ping"
                )
            ]

            chat_llm(messages)
        except anthropic.APIConnectionError as ex:
            raise CredentialsValidateFailedError(str(ex))
        except (anthropic.APIStatusError, anthropic.RateLimitError) as ex:
            raise CredentialsValidateFailedError(str(ex))
        except Exception as ex:
            logging.exception('Anthropic config validation failed')
            raise ex

    @classmethod
    def encrypt_provider_credentials(cls, tenant_id: str, credentials: dict) -> dict:
        credentials['anthropic_api_key'] = encrypter.encrypt_token(tenant_id, credentials['anthropic_api_key'])
        return credentials

    def get_provider_credentials(self, obfuscated: bool = False) -> dict:
        if self.provider.provider_type == ProviderType.CUSTOM.value:
            try:
                credentials = json.loads(self.provider.encrypted_config)
            except JSONDecodeError:
                credentials = {
                    'anthropic_api_url': None,
                    'anthropic_api_key': None
                }

            if credentials['anthropic_api_key']:
                credentials['anthropic_api_key'] = encrypter.decrypt_token(
                    self.provider.tenant_id,
                    credentials['anthropic_api_key']
                )

                if obfuscated:
                    credentials['anthropic_api_key'] = encrypter.obfuscated_token(credentials['anthropic_api_key'])

            if 'anthropic_api_url' not in credentials:
                credentials['anthropic_api_url'] = None

            return credentials
        else:
            return {
                'anthropic_api_url': hosted_model_providers.anthropic.api_base,
                'anthropic_api_key': hosted_model_providers.anthropic.api_key,
            }

    def should_deduct_quota(self):
        if hosted_model_providers.anthropic.quota_limit and hosted_model_providers.anthropic.quota_limit > 0:
            return True

        return False

    @classmethod
    def is_model_credentials_valid_or_raise(cls, model_name: str, model_type: ModelType, credentials: dict):
        """
        check model credentials valid.

        :param model_name:
        :param model_type:
        :param credentials:
        """
        return

    @classmethod
    def encrypt_model_credentials(cls, tenant_id: str, model_name: str, model_type: ModelType,
                                  credentials: dict) -> dict:
        """
        encrypt model credentials for save.

        :param tenant_id:
        :param model_name:
        :param model_type:
        :param credentials:
        :return:
        """
        return {}

    def get_model_credentials(self, model_name: str, model_type: ModelType, obfuscated: bool = False) -> dict:
        """
        get credentials for llm use.

        :param model_name:
        :param model_type:
        :param obfuscated:
        :return:
        """
        return self.get_provider_credentials(obfuscated)
