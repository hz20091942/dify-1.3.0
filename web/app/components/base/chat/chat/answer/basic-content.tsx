import type { FC } from 'react'
import { memo } from 'react'
import type { ChatItem } from '../../types'
import { Markdown } from '@/app/components/base/markdown'
import cn from '@/utils/classnames'
import '@/app/components/base/chat/embedded-chatbot/embedded-chatbot.scss'

type BasicContentProps = {
  item: ChatItem
}
const BasicContent: FC<BasicContentProps> = ({
  item,
}) => {
  const {
    annotation,
    content,
  } = item

  if (annotation?.logAnnotation)
    return <Markdown content={annotation?.logAnnotation.content || ''} />

  return (
    <Markdown
      className={cn(
        'embedded-chatbot-markdown',
        item.isError && '!text-[#F04438]',
      )}
      content={content}
    />
  )
}

export default memo(BasicContent)
