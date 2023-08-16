import decimal
import logging
from functools import wraps
from typing import List, Optional, Any

import openai
from langchain.callbacks.manager import Callbacks
from langchain.schema import LLMResult

from core.model_providers.providers.base import BaseModelProvider
from core.third_party.langchain.llms.azure_chat_open_ai import EnhanceAzureChatOpenAI
from core.third_party.langchain.llms.azure_open_ai import EnhanceAzureOpenAI
from core.model_providers.error import LLMBadRequestError, LLMAPIConnectionError, LLMAPIUnavailableError, \
    LLMRateLimitError, LLMAuthorizationError
from core.model_providers.models.llm.base import BaseLLM
from core.model_providers.models.entity.message import PromptMessage, MessageType
from core.model_providers.models.entity.model_params import ModelMode, ModelKwargs

AZURE_OPENAI_API_VERSION = '2023-07-01-preview'


class AzureOpenAIModel(BaseLLM):
    def __init__(self, model_provider: BaseModelProvider,
                 name: str,
                 model_kwargs: ModelKwargs,
                 streaming: bool = False,
                 callbacks: Callbacks = None):
        if name == 'text-davinci-003':
            self.model_mode = ModelMode.COMPLETION
        else:
            self.model_mode = ModelMode.CHAT

        # TODO load price config from configs(db)
        super().__init__(model_provider, name, model_kwargs, streaming, callbacks)

    def _init_client(self) -> Any:
        provider_model_kwargs = self._to_model_kwargs_input(self.model_rules, self.model_kwargs)
        if self.name == 'text-davinci-003':
            client = EnhanceAzureOpenAI(
                deployment_name=self.name,
                streaming=self.streaming,
                request_timeout=60,
                openai_api_type='azure',
                openai_api_version=AZURE_OPENAI_API_VERSION,
                openai_api_key=self.credentials.get('openai_api_key'),
                openai_api_base=self.credentials.get('openai_api_base'),
                callbacks=self.callbacks,
                **provider_model_kwargs
            )
        else:
            extra_model_kwargs = {
                'top_p': provider_model_kwargs.get('top_p'),
                'frequency_penalty': provider_model_kwargs.get('frequency_penalty'),
                'presence_penalty': provider_model_kwargs.get('presence_penalty'),
            }

            client = EnhanceAzureChatOpenAI(
                deployment_name=self.name,
                temperature=provider_model_kwargs.get('temperature'),
                max_tokens=provider_model_kwargs.get('max_tokens'),
                model_kwargs=extra_model_kwargs,
                streaming=self.streaming,
                request_timeout=60,
                openai_api_type='azure',
                openai_api_version=AZURE_OPENAI_API_VERSION,
                openai_api_key=self.credentials.get('openai_api_key'),
                openai_api_base=self.credentials.get('openai_api_base'),
                callbacks=self.callbacks,
            )

        return client

    def _run(self, messages: List[PromptMessage],
             stop: Optional[List[str]] = None,
             callbacks: Callbacks = None,
             **kwargs) -> LLMResult:
        """
        run predict by prompt messages and stop words.

        :param messages:
        :param stop:
        :param callbacks:
        :return:
        """
        prompts = self._get_prompt_from_messages(messages)
        return self._client.generate([prompts], stop, callbacks)

    def get_num_tokens(self, messages: List[PromptMessage]) -> int:
        """
        get num tokens of prompt messages.

        :param messages:
        :return:
        """
        prompts = self._get_prompt_from_messages(messages)
        if isinstance(prompts, str):
            return self._client.get_num_tokens(prompts)
        else:
            return max(self._client.get_num_tokens_from_messages(prompts) - len(prompts), 0)

    @property
    def model_unit_prices_config(self):
        price_config = {
                'gpt-4': {
                    'prompt': decimal.Decimal('0.03'),
                    'completion': decimal.Decimal('0.06'),
                    'unit': decimal.Decimal('0.001'),
                    'currency': 'USD'
                },
                'gpt-4-32k': {
                    'prompt': decimal.Decimal('0.06'),
                    'completion': decimal.Decimal('0.12'),
                    'unit': decimal.Decimal('0.001'),
                    'currency': 'USD'
                },
                'gpt-35-turbo': {
                    'prompt': decimal.Decimal('0.0015'),
                    'completion': decimal.Decimal('0.002'),
                    'unit': decimal.Decimal('0.001'),
                    'currency': 'USD'
                },
                'gpt-35-turbo-16k': {
                    'prompt': decimal.Decimal('0.003'),
                    'completion': decimal.Decimal('0.004'),
                    'unit': decimal.Decimal('0.001'),
                    'currency': 'USD'
                },
                'text-davinci-002': {
                    'prompt': decimal.Decimal('0.02'),
                    'completion': decimal.Decimal('0.02'),
                    'unit': decimal.Decimal('0.001'),
                    'currency': 'USD'
                },
                'text-davinci-003': {
                    'prompt': decimal.Decimal('0.02'),
                    'completion': decimal.Decimal('0.02'),
                    'unit': decimal.Decimal('0.001'),
                    'currency': 'USD'
                },
            }
        self.price_config = self.price_config if hasattr(self, 'price_config') else price_config
        return self.price_config

    def _set_model_kwargs(self, model_kwargs: ModelKwargs):
        provider_model_kwargs = self._to_model_kwargs_input(self.model_rules, model_kwargs)
        if self.name == 'text-davinci-003':
            for k, v in provider_model_kwargs.items():
                if hasattr(self.client, k):
                    setattr(self.client, k, v)
        else:
            extra_model_kwargs = {
                'top_p': provider_model_kwargs.get('top_p'),
                'frequency_penalty': provider_model_kwargs.get('frequency_penalty'),
                'presence_penalty': provider_model_kwargs.get('presence_penalty'),
            }

            self.client.temperature = provider_model_kwargs.get('temperature')
            self.client.max_tokens = provider_model_kwargs.get('max_tokens')
            self.client.model_kwargs = extra_model_kwargs

    def handle_exceptions(self, ex: Exception) -> Exception:
        if isinstance(ex, openai.error.InvalidRequestError):
            logging.warning("Invalid request to Azure OpenAI API.")
            return LLMBadRequestError(str(ex))
        elif isinstance(ex, openai.error.APIConnectionError):
            logging.warning("Failed to connect to Azure OpenAI API.")
            return LLMAPIConnectionError(ex.__class__.__name__ + ":" + str(ex))
        elif isinstance(ex, (openai.error.APIError, openai.error.ServiceUnavailableError, openai.error.Timeout)):
            logging.warning("Azure OpenAI service unavailable.")
            return LLMAPIUnavailableError(ex.__class__.__name__ + ":" + str(ex))
        elif isinstance(ex, openai.error.RateLimitError):
            return LLMRateLimitError('Azure ' + str(ex))
        elif isinstance(ex, openai.error.AuthenticationError):
            raise LLMAuthorizationError('Azure ' + str(ex))
        elif isinstance(ex, openai.error.OpenAIError):
            return LLMBadRequestError('Azure ' + ex.__class__.__name__ + ":" + str(ex))
        else:
            return ex

    @classmethod
    def support_streaming(cls):
        return True