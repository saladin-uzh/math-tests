import React from 'react'

import { Tray } from './ui'

import { useTray } from '../../utils'

import { Tooltip } from '..'

export default () => {
  const { tray } = useTray()

  return (
    <Tray>
      {tray.map(({ type, text }, index) => (
        <Tooltip key={index} type={type}>
          {text}
        </Tooltip>
      ))}
    </Tray>
  )
}
