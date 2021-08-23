import { Popover as AntdPopover } from 'antd'
import { RenderFunction } from 'antd/lib/tooltip'
import { FC } from 'react'

interface PopoverProps {
  enabled?: boolean
  content: React.ReactNode | RenderFunction;
  visible?: boolean
}

const Popover: FC<PopoverProps> = ({enabled = true, content, visible, children}) => {
  const conditionalPropsToPass = visible === undefined ? {} : {visible} 
  return(
    enabled ? (
      <AntdPopover content={content} {...conditionalPropsToPass}>
        {children}
      </AntdPopover>
    ) : (
      <>
        {children}
      </>
    )
  )
}

export default Popover
