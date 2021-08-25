import { Popover as AntdPopover } from 'antd'
import { PopoverProps as AntdPopoverProps } from 'antd'
import { FC } from 'react'

interface PopoverProps {
  enabled?: boolean
}

const Popover: FC<PopoverProps&AntdPopoverProps> = ({enabled = true, children, ...attrs}) => {
  return(
    enabled ? (
      <AntdPopover {...attrs} arrowPointAtCenter>
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
