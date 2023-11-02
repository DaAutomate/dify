'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import RetrivalParamConfig from '../retrival-param-config'
import { RETRIEVE_METHOD } from '@/types/app'
import RadioCard from '@/app/components/base/radio-card'
import { PatternRecognition, Semantic } from '@/app/components/base/icons/src/vender/solid/development'
import { FileSearch02 } from '@/app/components/base/icons/src/vender/solid/files'

type Props = {
  value: RETRIEVE_METHOD
  onChange: (value: RETRIEVE_METHOD) => void
}

const RetrievalMethodConfig: FC<Props> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation()

  return (
    <div className='space-y-2'>
      <RadioCard
        icon={<Semantic className='w-4 h-4 text-[#7839EE]' />}
        title={t('dataset.retrival.semantic.title')}
        description={t('dataset.retrival.semantic.description')}
        isChosen={value === RETRIEVE_METHOD.semantic}
        onChosen={() => onChange(RETRIEVE_METHOD.semantic)}
        chosenConfig={
          <RetrivalParamConfig
            type={RETRIEVE_METHOD.semantic}
            value={{}}
            onChange={() => {}}
          />
        }
      />
      <RadioCard
        icon={<FileSearch02 className='w-4 h-4 text-[#7839EE]' />}
        title={t('dataset.retrival.fullText.title')}
        description={t('dataset.retrival.fullText.description')}
        isChosen={value === RETRIEVE_METHOD.fullText}
        onChosen={() => onChange(RETRIEVE_METHOD.fullText)}
        chosenConfig={
          <RetrivalParamConfig
            type={RETRIEVE_METHOD.fullText}
            value={{}}
            onChange={() => {}}
          />
        }
      />
      <RadioCard
        icon={<PatternRecognition className='w-4 h-4 text-[#7839EE]' />}
        title={
          <div className='flex items-center space-x-1'>
            <div>{t('dataset.retrival.hybrid.title')}</div>
            <div className='flex h-full items-center px-1.5 rounded-md border border-[#E0EAFF] text-xs font-medium text-[#444CE7]'>{t('dataset.retrival.hybrid.recommend')}</div>
          </div>
        }
        description={t('dataset.retrival.hybrid.description')}
        isChosen={value === RETRIEVE_METHOD.hybrid}
        onChosen={() => onChange(RETRIEVE_METHOD.hybrid)}
        chosenConfig={
          <RetrivalParamConfig
            type={RETRIEVE_METHOD.hybrid}
            value={value}
            onChange={() => {}}
          />
        }
      />
    </div>
  )
}
export default React.memo(RetrievalMethodConfig)
