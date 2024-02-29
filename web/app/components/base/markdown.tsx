import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css'
import RemarkMath from 'remark-math'
import RemarkBreaks from 'remark-breaks'
import RehypeKatex from 'rehype-katex'
import RehypeRaw from 'rehype-raw'
import RemarkGfm from 'remark-gfm'
import DOMPurify from 'dompurify'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useState } from 'react'
import cn from 'classnames'
import CopyBtn from '@/app/components/app/chat/copy-btn'
import SVGBtn from '@/app/components/app/chat/svg'
import Flowchart from '@/app/components/base/flow-mermaid'
import s from '@/app/components/app/chat/style.module.css'

// Available language https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
const capitalizationLanguageNameMap: Record<string, string> = {
  sql: 'SQL',
  javascript: 'JavaScript',
  java: 'Java',
  typescript: 'TypeScript',
  vbscript: 'VBScript',
  css: 'CSS',
  html: 'HTML',
  xml: 'XML',
  php: 'PHP',
  python: 'Python',
  yaml: 'Yaml',
  mermaid: 'Mermaid',
  markdown: 'MarkDown',
  makefile: 'MakeFile',
  shell: 'Shell',
  powershell: 'PowerShell',
  json: 'JSON',
  latex: 'Latex',
}
const getCorrectCapitalizationLanguageName = (language: string) => {
  if (!language)
    return 'Plain'

  if (language in capitalizationLanguageNameMap)
    return capitalizationLanguageNameMap[language]

  return language.charAt(0).toUpperCase() + language.substring(1)
}

export function Markdown(props: { content: string; className?: string }) {
  const [isSVG, setIsSVG] = useState(false)
  return (
    <div className={cn(props.className, 'markdown-body')}>
      <ReactMarkdown
        remarkPlugins={[[RemarkGfm, RemarkMath, { singleDollarTextMath: false }], RemarkBreaks]}
        rehypePlugins={[
          RehypeKatex,
          RehypeRaw as any,
        ]}
        components={{
          iframe: ({ src, width, height, title, className }) => {
            if (!src || typeof src !== 'string' || !src.startsWith('https://')) {
              return null
            }
            else {
              try {
                const sanitizedSrc = DOMPurify.sanitize(src, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
                return (
                  <iframe
                    src={sanitizedSrc}
                    width={width ?? 450}
                    height={height ?? 700}
                    title={title}
                    className={`max-w-full align-middle border-none rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-2 mb-2 ${className}`}
                    sandbox="allow-same-origin allow-forms"
                  />
                )
              }
              catch (error) {
                console.error('Error sanitizing iframe src:', error)
                return null
              }
            }
          },
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const language = match?.[1]
            const languageShowName = getCorrectCapitalizationLanguageName(language || '')
            return (!inline && match)
              ? (
                <div>
                  <div
                    className='flex justify-between h-8 items-center p-1 pl-3 border-b'
                    style={{
                      borderColor: 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <div className='text-[13px] text-gray-500 font-normal'>{languageShowName}</div>
                    <div style={{ display: 'flex' }}>
                      {language === 'mermaid'
                        && <SVGBtn
                          isSVG={isSVG}
                          setIsSVG={setIsSVG}
                        />
                      }
                      <CopyBtn
                        className={cn(s.copyBtn, 'mr-1')}
                        value={String(children).replace(/\n$/, '')}
                        isPlain
                      />
                    </div>
                  </div>
                  {(language === 'mermaid' && isSVG)
                    ? (<Flowchart PrimitiveCode={String(children).replace(/\n$/, '')} />)
                    : (<SyntaxHighlighter
                      {...props}
                      style={atelierHeathLight}
                      customStyle={{
                        paddingLeft: 12,
                        backgroundColor: '#fff',
                      }}
                      language={match[1]}
                      showLineNumbers
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>)}
                </div>
              )
              : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
          },
          img({ src, alt, ...props }) {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt}
                width={250}
                height={250}
                className="max-w-full h-auto align-middle border-none rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-2 mb-2"
                {...props}
              />
            )
          },
          p: (paragraph) => {
            const { node }: any = paragraph
            if (node.children[0].tagName === 'img') {
              const image = node.children[0]

              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image.properties.src}
                  width={250}
                  height={250}
                  className="max-w-full h-auto align-middle border-none rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-2 mb-2"
                  alt={image.properties.alt}
                />
              )
            }
            return <p>{paragraph.children}</p>
          },
        }}
        linkTarget='_blank'
      >
        {/* Markdown detect has problem. */}
        {props.content}
      </ReactMarkdown>
    </div>
  )
}
