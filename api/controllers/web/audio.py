import logging

from flask import request
from werkzeug.exceptions import InternalServerError

import services
from controllers.web import api
from controllers.web.error import (
    AppUnavailableError,
    AudioTooLargeError,
    CompletionRequestError,
    NoAudioUploadedError,
    ProviderModelCurrentlyNotSupportError,
    ProviderNotInitializeError,
    ProviderNotSupportSpeechToTextError,
    ProviderQuotaExceededError,
    UnsupportedAudioTypeError,
)
from controllers.web.wraps import WebApiResource
from core.errors.error import ModelCurrentlyNotSupportError, ProviderTokenNotInitError, QuotaExceededError
from core.model_runtime.errors.invoke import InvokeError
from models.model import App
from services.audio_service import AudioService
from services.errors.audio import (
    AudioTooLargeServiceError,
    NoAudioUploadedServiceError,
    ProviderNotSupportSpeechToTextServiceError,
    UnsupportedAudioTypeServiceError,
)


class AudioApi(WebApiResource):
    def post(self, app_model: App, end_user):
        file = request.files['file']

        try:
            response = AudioService.transcript_asr(
                app_model=app_model,
                file=file,
                end_user=end_user
            )

            return response
        except services.errors.app_model_config.AppModelConfigBrokenError:
            logging.exception("App model config broken.")
            raise AppUnavailableError()
        except NoAudioUploadedServiceError:
            raise NoAudioUploadedError()
        except AudioTooLargeServiceError as e:
            raise AudioTooLargeError(str(e))
        except UnsupportedAudioTypeServiceError:
            raise UnsupportedAudioTypeError()
        except ProviderNotSupportSpeechToTextServiceError:
            raise ProviderNotSupportSpeechToTextError()
        except ProviderTokenNotInitError as ex:
            raise ProviderNotInitializeError(ex.description)
        except QuotaExceededError:
            raise ProviderQuotaExceededError()
        except ModelCurrentlyNotSupportError:
            raise ProviderModelCurrentlyNotSupportError()
        except InvokeError as e:
            raise CompletionRequestError(e.description)
        except ValueError as e:
            raise e
        except Exception as e:
            logging.exception(f"internal server error: {str(e)}")
            raise InternalServerError()


class TextApi(WebApiResource):
    def post(self, app_model: App, end_user):
        from flask_restful import reqparse
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('message_id', type=str, required=True, location='json')
            parser.add_argument('voice', type=str, location='json')
            parser.add_argument('streaming', type=bool, location='json')
            args = parser.parse_args()

            message_id = args.get('message_id')
            streaming = args.get('streaming') if args.get('streaming') else True
            voice = args.get('voice') if args.get('voice') else app_model.app_model_config.text_to_speech_dict.get(
                'voice')

            response = AudioService.transcript_tts(
                app_model=app_model,
                message_id=message_id,
                end_user=end_user.external_user_id,
                voice=voice,
                streaming=streaming
            )

            return response
        except services.errors.app_model_config.AppModelConfigBrokenError:
            logging.exception("App model config broken.")
            raise AppUnavailableError()
        except NoAudioUploadedServiceError:
            raise NoAudioUploadedError()
        except AudioTooLargeServiceError as e:
            raise AudioTooLargeError(str(e))
        except UnsupportedAudioTypeServiceError:
            raise UnsupportedAudioTypeError()
        except ProviderNotSupportSpeechToTextServiceError:
            raise ProviderNotSupportSpeechToTextError()
        except ProviderTokenNotInitError as ex:
            raise ProviderNotInitializeError(ex.description)
        except QuotaExceededError:
            raise ProviderQuotaExceededError()
        except ModelCurrentlyNotSupportError:
            raise ProviderModelCurrentlyNotSupportError()
        except InvokeError as e:
            raise CompletionRequestError(e.description)
        except ValueError as e:
            raise e
        except Exception as e:
            logging.exception(f"internal server error: {str(e)}")
            raise InternalServerError()


api.add_resource(AudioApi, '/audio-to-text')
api.add_resource(TextApi, '/text-to-audio')
