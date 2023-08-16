import decimal
import logging

import openai
import tiktoken
from langchain.embeddings import OpenAIEmbeddings

from core.model_providers.error import LLMBadRequestError, LLMAuthorizationError, LLMRateLimitError, \
    LLMAPIUnavailableError, LLMAPIConnectionError
from core.model_providers.models.embedding.base import BaseEmbedding
from core.model_providers.providers.base import BaseModelProvider

AZURE_OPENAI_API_VERSION = '2023-07-01-preview'


class AzureOpenAIEmbedding(BaseEmbedding):
    def __init__(self, model_provider: BaseModelProvider, name: str):
        self.credentials = model_provider.get_model_credentials(
            model_name=name,
            model_type=self.type
        )

        client = OpenAIEmbeddings(
            deployment=name,
            openai_api_type='azure',
            openai_api_version=AZURE_OPENAI_API_VERSION,
            chunk_size=16,
            max_retries=1,
            **self.credentials
        )
        # TODO load price_config from configs(db)

        super().__init__(model_provider, client, name)

    def get_num_tokens(self, text: str) -> int:
        """
        get num tokens of text.

        :param text:
        :return:
        """
        if len(text) == 0:
            return 0

        enc = tiktoken.encoding_for_model(self.credentials.get('base_model_name'))

        tokenized_text = enc.encode(text)

        # calculate the number of tokens in the encoded text
        return len(tokenized_text)

    @property
    def model_unit_prices_config(self):
        """
        get model unit prices config.

        :return: object format {
            "model_name": {
                'completion': decimal.Decimal('0'),
                'unit': decimal.Decimal('0'),
            }
        }
        """
        price_config = {
            'text-embedding-ada-002':{
                'completion': decimal.Decimal('0.0001'),
                'unit': decimal.Decimal('0.001'),
                'currency': 'USD'
            }
        }
        self.price_config = self.price_config if hasattr(self, 'price_config') else price_config
        return self.price_config

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
