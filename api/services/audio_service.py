import io
from flask_login import current_user
from typing import Optional

from core.model_manager import ModelManager
from core.model_runtime.entities.model_entities import ModelType
from services.errors.audio import (AudioTooLargeServiceError,
                                   NoAudioUploadedServiceError,
                                   ProviderNotSupportTextToSpeechServiceError,
                                   ProviderNotSupportSpeechToTextServiceError,
                                   UnsupportedAudioTypeServiceError)
from werkzeug.datastructures import FileStorage

FILE_SIZE = 30
FILE_SIZE_LIMIT = FILE_SIZE * 1024 * 1024
ALLOWED_EXTENSIONS = ['mp3', 'mp4', 'mpeg', 'mpga', 'm4a', 'wav', 'webm', 'amr']


class AudioService:
    @classmethod
    def transcript_asr(cls, tenant_id: str, file: FileStorage, promot: str, end_user: Optional[str] = None):
        if file is None:
            raise NoAudioUploadedServiceError()

        extension = file.mimetype
        if extension not in [f'audio/{ext}' for ext in ALLOWED_EXTENSIONS]:
            raise UnsupportedAudioTypeServiceError()

        file_content = file.read()
        file_size = len(file_content)

        if file_size > FILE_SIZE_LIMIT:
            message = f"Audio size larger than {FILE_SIZE} mb"
            raise AudioTooLargeServiceError(message)

        model_manager = ModelManager()
        model_instance = model_manager.get_default_model_instance(
            tenant_id=tenant_id,
            model_type=ModelType.SPEECH2TEXT
        )
        if model_instance is None:
            raise ProviderNotSupportSpeechToTextServiceError()

        buffer = io.BytesIO(file_content)
        buffer.name = 'temp.mp3'

        params = {"promot": promot, "end_user": end_user}
        return {"text": model_instance.invoke_speech2text(file=buffer, user=end_user, **params)}

    @classmethod
    def transcript_tts(cls, tenant_id: str, text: str, end_user: Optional[str] = None):
        model_manager = ModelManager()
        model_instance = model_manager.get_default_model_instance(
            tenant_id=tenant_id,
            model_type=ModelType.TTS
        )
        if model_instance is None:
            raise ProviderNotSupportTextToSpeechServiceError()

        try:
            audio_response = model_instance.invoke_tts(content_text=text.strip(), user=end_user)
            return audio_response
        except Exception as e:
            raise e
