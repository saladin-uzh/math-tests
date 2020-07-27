import React from 'react'

import { Tray } from './ui'

import { useTray } from '../../utils'

import { Tooltip } from '..'

import { TooltipProps } from './types'

export default () => {
  const { tray } = useTray()

  return (
    <Tray>
      {tray.map(({ type, text }: TooltipProps, index: number) => (
        <Tooltip key={index} type={type}>
          {text}
        </Tooltip>
      ))}
    </Tray>
  )
}
