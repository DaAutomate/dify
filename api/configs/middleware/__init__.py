from typing import Optional

from pydantic import BaseModel, Field

from configs.middleware.redis_config import RedisConfig
from configs.middleware.storage.aliyun_oss_storage_config import AliyunOSSStorageConfig
from configs.middleware.storage.amazon_s3_storage_config import S3StorageConfig
from configs.middleware.storage.azure_blob_storage_config import AzureBlobStorageConfig
from configs.middleware.storage.google_cloud_storage_config import GoogleCloudStorageConfig
from configs.middleware.storage.tencent_cos_storage_config import TencentCloudCOSStorageConfig
from configs.middleware.vdb.chroma_configs import ChromaConfigs
from configs.middleware.vdb.milvus_configs import MilvusConfigs
from configs.middleware.vdb.opensearch_configs import OpenSearchConfigs
from configs.middleware.vdb.oracle_configs import OracleConfigs
from configs.middleware.vdb.pgvector_configs import PGVectorConfigs
from configs.middleware.vdb.pgvectors_configs import PGVectoRSConfigs
from configs.middleware.vdb.qdrant_configs import QdrantConfigs
from configs.middleware.vdb.relyt_configs import RelytConfigs
from configs.middleware.vdb.tencent_vector_configs import TencentVectorDBConfigs
from configs.middleware.vdb.tidb_vector_configs import TiDBVectorConfigs
from configs.middleware.vdb.weaviate_configs import WeaviateConfigs


class StorageConfigs(BaseModel):
    STORAGE_TYPE: str = Field(
        description='storage type,'
                    ' default to `local`,'
                    ' available values are `local`, `s3`, `azure-blob`, `aliyun-oss`, `google-storage`.',
        default='local',
    )

    STORAGE_LOCAL_PATH: str = Field(
        description='local storage path',
        default='storage',
    )


class VectorStoreConfigs(BaseModel):
    VECTOR_STORE: Optional[str] = Field(
        description='vector store type',
        default=None,
    )


class KeywordStoreConfigs(BaseModel):
    KEYWORD_STORE: str = Field(
        description='keyword store type',
        default='jieba',
    )


class MiddlewareConfig(
    # place the configs in alphabet order
    KeywordStoreConfigs,
    RedisConfig,

    # configs of storage and storage providers
    StorageConfigs,
    AliyunOSSStorageConfig,
    AzureBlobStorageConfig,
    GoogleCloudStorageConfig,
    TencentCloudCOSStorageConfig,
    S3StorageConfig,

    # configs of vdb and vdb providers
    VectorStoreConfigs,
    ChromaConfigs,
    MilvusConfigs,
    OpenSearchConfigs,
    OracleConfigs,
    PGVectorConfigs,
    PGVectoRSConfigs,
    QdrantConfigs,
    RelytConfigs,
    TencentVectorDBConfigs,
    TiDBVectorConfigs,
    WeaviateConfigs,
):
    pass
