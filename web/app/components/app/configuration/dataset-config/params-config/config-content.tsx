'use client'
import {
  memo,
  useMemo,
} from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { uniq } from 'lodash-es'
import {
  RiQuestionLine,
} from '@remixicon/react'
import TopKItem from '@/app/components/base/param-item/top-k-item'
import ScoreThresholdItem from '@/app/components/base/param-item/score-threshold-item'
import RadioCard from '@/app/components/base/radio-card/simple'
import { RETRIEVE_TYPE } from '@/types/app'
import {
  MultiPathRetrieval,
  NTo1Retrieval,
} from '@/app/components/base/icons/src/public/common'
import type {
  DatasetConfigs,
} from '@/models/debug'

import ModelSelector from '@/app/components/header/account-setting/model-provider-page/model-selector'
import { useModelListAndDefaultModelAndCurrentProviderAndModel } from '@/app/components/header/account-setting/model-provider-page/hooks'
import type { ModelConfig } from '@/app/components/workflow/types'
import ModelParameterModal from '@/app/components/header/account-setting/model-provider-page/model-parameter-modal'
import TooltipPlus from '@/app/components/base/tooltip-plus'
import { ModelTypeEnum } from '@/app/components/header/account-setting/model-provider-page/declarations'
import type { DataSet } from '@/models/datasets'

type Props = {
  datasetConfigs: DatasetConfigs
  onChange: (configs: DatasetConfigs, isRetrievalModeChange?: boolean) => void
  isInWorkflow?: boolean
  singleRetrievalModelConfig?: ModelConfig
  onSingleRetrievalModelChange?: (config: ModelConfig) => void
  onSingleRetrievalModelParamsChange?: (config: ModelConfig) => void
  selectedDatasets?: DataSet[]
}

const ConfigContent: FC<Props> = ({
  datasetConfigs,
  onChange,
  isInWorkflow,
  singleRetrievalModelConfig: singleRetrievalConfig = {} as ModelConfig,
  onSingleRetrievalModelChange = () => { },
  onSingleRetrievalModelParamsChange = () => { },
  selectedDatasets = [],
}) => {
  const { t } = useTranslation()
  const type = datasetConfigs.retrieval_model
  const setType = (value: RETRIEVE_TYPE) => {
    onChange({
      ...datasetConfigs,
      retrieval_model: value,
    }, true)
  }
  const {
    modelList: rerankModelList,
    defaultModel: rerankDefaultModel,
  } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.rerank)
  const rerankModel = (() => {
    if (datasetConfigs.reranking_model) {
      return {
        provider_name: datasetConfigs.reranking_model.reranking_provider_name,
        model_name: datasetConfigs.reranking_model.reranking_model_name,
      }
    }
    else if (rerankDefaultModel) {
      return {
        provider_name: rerankDefaultModel.provider.provider,
        model_name: rerankDefaultModel.model,
      }
    }
  })()
  console.log(rerankModel, 'rerankModel')

  const handleParamChange = (key: string, value: number) => {
    if (key === 'top_k') {
      onChange({
        ...datasetConfigs,
        top_k: value,
      })
    }
    else if (key === 'score_threshold') {
      onChange({
        ...datasetConfigs,
        score_threshold: value,
      })
    }
  }

  const handleSwitch = (key: string, enable: boolean) => {
    if (key === 'top_k')
      return

    onChange({
      ...datasetConfigs,
      score_threshold_enabled: enable,
    })
  }

  const model = singleRetrievalConfig

  const selectedDatasetsMode = useMemo(() => {
    return {
      onlyHighQuality: selectedDatasets.every(item => item.indexing_technique === 'high_quality'),
      onlyEconomic: selectedDatasets.every(item => item.indexing_technique === 'economy'),
      mixtureHighQualityAndEconomic: selectedDatasets.some(item => item.indexing_technique === 'high_quality') && selectedDatasets.some(item => item.indexing_technique === 'economy'),
      inconsistentEmbeddingModel: uniq(selectedDatasets.map(item => item.embedding_model)).length > 1,
    }
  }, [selectedDatasets])

  return (
    <div>
      <div className='mt-2 space-y-3'>
        <RadioCard
          icon={<NTo1Retrieval className='shrink-0 mr-3 w-9 h-9 rounded-lg' />}
          title={(
            <div className='flex items-center'>
              {t('appDebug.datasetConfig.retrieveOneWay.title')}
              <TooltipPlus popupContent={<div className='w-[320px]'>According to product planning, N-to-1 retrieval will be officially deprecated in September. Until then you can still use it normally.</div>}>
                <div className='ml-1 px-[5px] h-[18px] rounded-[5px] border border-text-accent-secondary system-2xs-medium-uppercase leading-[18px] text-text-accent-secondary'>legacy</div>
              </TooltipPlus>
            </div>
          )}
          description={t('appDebug.datasetConfig.retrieveOneWay.description')}
          isChosen={type === RETRIEVE_TYPE.oneWay}
          onChosen={() => { setType(RETRIEVE_TYPE.oneWay) }}
        />
        <RadioCard
          icon={<MultiPathRetrieval className='shrink-0 mr-3 w-9 h-9 rounded-lg' />}
          title={t('appDebug.datasetConfig.retrieveMultiWay.title')}
          description={t('appDebug.datasetConfig.retrieveMultiWay.description')}
          isChosen={type === RETRIEVE_TYPE.multiWay}
          onChosen={() => { setType(RETRIEVE_TYPE.multiWay) }}
        />
      </div>
      {
        selectedDatasetsMode.inconsistentEmbeddingModel
        && type === RETRIEVE_TYPE.multiWay
        && !datasetConfigs.reranking_model
        && (
          <div className='mt-4 system-xs-regular text-text-warning'>
            {t('dataset.inconsistentEmbeddingModelTip')}
          </div>
        )
      }
      {
        selectedDatasetsMode.mixtureHighQualityAndEconomic
        && type === RETRIEVE_TYPE.multiWay
        && !datasetConfigs.reranking_model
        && (
          <div className='mt-4 system-xs-regular text-text-warning'>
            {t('dataset.mixtureHighQualityAndEconomicTip')}
          </div>
        )
      }
      {type === RETRIEVE_TYPE.multiWay && (
        <>
          <div className='mt-4'>
            <div className='leading-[32px] text-[13px] font-medium text-gray-900'>{t('common.modelProvider.rerankModel.key')}</div>
            <div>
              <ModelSelector
                defaultModel={rerankModel && { provider: rerankModel?.provider_name, model: rerankModel?.model_name }}
                onSelect={(v) => {
                  onChange({
                    ...datasetConfigs,
                    reranking_model: {
                      reranking_provider_name: v.provider,
                      reranking_model_name: v.model,
                    },
                  })
                }}
                modelList={rerankModelList}
              />
            </div>
          </div>
          <div className='mt-4 space-y-4'>
            <TopKItem
              value={datasetConfigs.top_k}
              onChange={handleParamChange}
              enable={true}
            />
            <ScoreThresholdItem
              value={datasetConfigs.score_threshold as number}
              onChange={handleParamChange}
              enable={datasetConfigs.score_threshold_enabled}
              hasSwitch={true}
              onSwitchChange={handleSwitch}
            />
          </div>
        </>
      )}

      {isInWorkflow && type === RETRIEVE_TYPE.oneWay && (
        <div className='mt-4'>
          <div className='flex items-center space-x-0.5'>
            <div className='leading-[32px] text-[13px] font-medium text-gray-900'>{t('common.modelProvider.systemReasoningModel.key')}</div>
            <TooltipPlus
              popupContent={t('common.modelProvider.systemReasoningModel.tip')}
            >
              <RiQuestionLine className='w-3.5 h-4.5 text-gray-400' />
            </TooltipPlus>
          </div>
          <ModelParameterModal
            isInWorkflow={isInWorkflow}
            popupClassName='!w-[387px]'
            portalToFollowElemContentClassName='!z-[1002]'
            isAdvancedMode={true}
            mode={model?.mode}
            provider={model?.provider}
            completionParams={model?.completion_params}
            modelId={model?.name}
            setModel={onSingleRetrievalModelChange as any}
            onCompletionParamsChange={onSingleRetrievalModelParamsChange as any}
            hideDebugWithMultipleModel
            debugWithMultipleModel={false}
          />
        </div>
      )
      }
    </div >
  )
}
export default memo(ConfigContent)
