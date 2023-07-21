import useSWR from 'swr'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import SerpapiPlugin from './SerpapiPlugin'
import { fetchPluginProviders } from '@/service/common'
import type { PluginProvider } from '@/models/common'

const PluginPage = () => {
  const { t } = useTranslation()
  const { data: plugins, mutate } = useSWR('/workspaces/current/tool-providers', fetchPluginProviders)

  const Plugin_MAP: Record<string, any> = {
    serpapi: (plugin: PluginProvider) => <SerpapiPlugin plugin={plugin} onUpdate={() => mutate()} />,
  }

  return (
    <div className='pb-7'>
      <div>
        {plugins?.map(plugin => Plugin_MAP[plugin.tool_name](plugin))}
      </div>
      <div className='absolute bottom-0 w-full h-[42px] flex items-center bg-white text-xs text-gray-500'>
        <LockClosedIcon className='w-3 h-3 mr-1' />
        {t('common.provider.encrypted.front')}
        <Link
          className='text-primary-600 mx-1'
          target={'_blank'}
          href='https://pycryptodome.readthedocs.io/en/latest/src/cipher/oaep.html'
        >
          PKCS1_OAEP
        </Link>
        {t('common.provider.encrypted.back')}
      </div>
    </div>
  )
}

export default PluginPage
