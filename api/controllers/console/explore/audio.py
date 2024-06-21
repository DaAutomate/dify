import logging

from flask import request
from werkzeug.exceptions import InternalServerError

import services
from controllers.console import api
from controllers.console.app.error import (
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
from controllers.console.explore.wraps import InstalledAppResource
from core.errors.error import ModelCurrentlyNotSupportError, ProviderTokenNotInitError, QuotaExceededError
from core.model_runtime.errors.invoke import InvokeError
from services.audio_service import AudioService
from services.errors.audio import (
    AudioTooLargeServiceError,
    NoAudioUploadedServiceError,
    ProviderNotSupportSpeechToTextServiceError,
    UnsupportedAudioTypeServiceError,
)


class ChatAudioApi(InstalledAppResource):
    def post(self, installed_app):
        app_model = installed_app.app

        file = request.files['file']

        try:
            response = AudioService.transcript_asr(
                app_model=app_model,
                file=file,
                end_user=None
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
            logging.exception("internal server error.")
            raise InternalServerError()


class ChatTextApi(InstalledAppResource):
    def post(self, installed_app):
        app_model = installed_app.app

        try:
            response = AudioService.transcript_tts(
                app_model=app_model,
                text=request.form['text'],
                voice=request.form['voice'] if request.form.get('voice') else app_model.app_model_config.text_to_speech_dict.get('voice'),
                streaming=False
            )
            return {'data': response.data.decode('latin1')}
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
            logging.exception("internal server error.")
            raise InternalServerError()

class ChatTextApiWithMessageId(InstalledAppResource):
    def post(self, installed_app):
        from flask_restful import reqparse

        app_model = installed_app.app
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('message_id', type=str, required=True, location='json')
            parser.add_argument('voice', type=str, location='json')
            parser.add_argument('streaming', type=bool, location='json')
            args = parser.parse_args()

            message_id = args.get('message_id')
            streaming = args.get('streaming') if args.get('streaming') else True
            voice = args.get('voice') if args.get('voice') else app_model.app_model_config.text_to_speech_dict.get('voice')
            response = AudioService.transcript_tts(
                app_model=app_model,
                message_id=message_id,
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
            logging.exception("internal server error.")
            raise InternalServerError()


api.add_resource(ChatAudioApi, '/installed-apps/<uuid:installed_app_id>/audio-to-text', endpoint='installed_app_audio')
api.add_resource(ChatTextApi, '/installed-apps/<uuid:installed_app_id>/text-to-audio', endpoint='installed_app_text')
api.add_resource(ChatTextApiWithMessageId, '/installed-apps/<uuid:installed_app_id>/text-to-audio/message-id',
                 endpoint='installed_app_text_with_message_id')
