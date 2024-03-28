'use client'

import { useEffect, useRef, useState } from 'react'
import useSWRInfinite from 'swr/infinite'
import { useTranslation } from 'react-i18next'
import { useDebounceFn } from 'ahooks'
import AppCard from './AppCard'
import NewAppCard from './NewAppCard'
import type { AppListResponse } from '@/models/app'
import { fetchAppList } from '@/service/apps'
import { useAppContext } from '@/context/app-context'
import { NEED_REFRESH_APP_LIST_KEY } from '@/config'
import { CheckModal } from '@/hooks/use-pay'
import TabSliderNew from '@/app/components/base/tab-slider-new'
import { useTabSearchParams } from '@/hooks/use-tab-searchparams'
import { DotsGrid } from '@/app/components/base/icons/src/vender/line/general'
import {
  // AiText,
  ChatBot,
  CuteRobot,
} from '@/app/components/base/icons/src/vender/line/communication'
import { Route } from '@/app/components/base/icons/src/vender/line/mapsAndTravel'
import SearchInput from '@/app/components/base/search-input'

const getKey = (
  pageIndex: number,
  previousPageData: AppListResponse,
  activeTab: string,
  keywords: string,
) => {
  if (!pageIndex || previousPageData.has_more) {
    const params: any = { url: 'apps', params: { page: pageIndex + 1, limit: 30, name: keywords } }

    if (activeTab !== 'all')
      params.params.mode = activeTab
    else
      delete params.params.mode

    return params
  }
  return null
}

const Apps = () => {
  const { t } = useTranslation()
  const { isCurrentWorkspaceManager } = useAppContext()
  const [activeTab, setActiveTab] = useTabSearchParams({
    defaultTab: 'all',
  })
  const [keywords, setKeywords] = useState('')
  const [searchKeywords, setSearchKeywords] = useState('')

  const { data, isLoading, setSize, mutate } = useSWRInfinite(
    (pageIndex: number, previousPageData: AppListResponse) => getKey(pageIndex, previousPageData, activeTab, searchKeywords),
    fetchAppList,
    { revalidateFirstPage: true },
  )

  const anchorRef = useRef<HTMLDivElement>(null)
  const options = [
    { value: 'all', text: t('app.types.all'), icon: <DotsGrid className='w-[14px] h-[14px] mr-1'/> },
    { value: 'chat', text: t('app.types.chatbot'), icon: <ChatBot className='w-[14px] h-[14px] mr-1'/> },
    { value: 'agent-chat', text: t('app.types.agent'), icon: <CuteRobot className='w-[14px] h-[14px] mr-1'/> },
    // { value: 'completion', text: t('app.newApp.completeApp'), icon: <AiText className='w-[14px] h-[14px] mr-1'/> },
    { value: 'workflow', text: t('app.types.workflow'), icon: <Route className='w-[14px] h-[14px] mr-1'/> },
  ]

  useEffect(() => {
    document.title = `${t('common.menus.apps')} -  Dify`
    if (localStorage.getItem(NEED_REFRESH_APP_LIST_KEY) === '1') {
      localStorage.removeItem(NEED_REFRESH_APP_LIST_KEY)
      mutate()
    }
  }, [])

  useEffect(() => {
    let observer: IntersectionObserver | undefined
    if (anchorRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading)
          setSize((size: number) => size + 1)
      }, { rootMargin: '100px' })
      observer.observe(anchorRef.current)
    }
    return () => observer?.disconnect()
  }, [isLoading, setSize, anchorRef, mutate])

  const { run: handleSearch } = useDebounceFn(() => {
    setSearchKeywords(keywords)
  }, { wait: 500 })

  const handleKeywordsChange = (value: string) => {
    setKeywords(value)
    handleSearch()
  }

  return (
    <>
      <div className='sticky top-0 flex justify-between items-center pt-4 px-12 pb-2 leading-[56px] bg-gray-100 z-10 flex-wrap gap-y-2'>
        <TabSliderNew
          value={activeTab}
          onChange={setActiveTab}
          options={options}
        />
        <SearchInput value={keywords} onChange={handleKeywordsChange} />
      </div>
      <nav className='grid content-start grid-cols-1 gap-4 px-12 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow shrink-0'>
        {isCurrentWorkspaceManager
          && <NewAppCard onSuccess={mutate} />}
        {data?.map(({ data: apps }: any) => apps.map((app: any) => (
          <AppCard key={app.id} app={app} onRefresh={mutate} />
        )))}
        <CheckModal />
      </nav>
      <div ref={anchorRef} className='h-0'> </div>
    </>
  )
}

export default Apps
