import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import Item from './item'
import Empty from './empty'
import { useModalContext } from '@/context/modal-context'
import { Plus } from '@/app/components/base/icons/src/vender/line/general'
import { fetchApiBasedExtensionList } from '@/service/common'

const ApiBasedExtensionPage = () => {
  const { t } = useTranslation()
  const { setShowApiBasedExtensionModal } = useModalContext()
  const { data, mutate, isLoading } = useSWR(
    '/api-based-extension',
    fetchApiBasedExtensionList,
  )

  const handleOpenApiBasedExtensionModal = () => {
    setShowApiBasedExtensionModal({
      payload: {},
      onSaveCallback: () => mutate(),
    })
  }

  return (
    <div>
      {
        !isLoading && !data?.length && (
          <Empty />
        )
      }
      {
        !isLoading && !!data?.length && (
          data.map(item => (
            <Item key={item.id} data={item} />
          ))
        )
      }
      <div
        className='flex items-center justify-center px-3 h-8 text-[13px] font-medium text-gray-700 rounded-lg bg-gray-50 cursor-pointer'
        onClick={handleOpenApiBasedExtensionModal}
      >
        <Plus className='mr-2 w-4 h-4' />
        {t('common.apiBasedExtension.add')}
      </div>
    </div>
  )
}

export default ApiBasedExtensionPage
