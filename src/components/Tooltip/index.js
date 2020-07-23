import React, { useEffect } from 'react'

import { useTray } from '../../utils'

import { colors } from '../../constants'

import { TooltipContainer } from './ui'

const TYPES = {
  ERROR: 'error',
  INFO: 'info',
}

export const types = {
  [TYPES.ERROR]: {
    bgColor: colors.red,
    textColor: colors.white,
  },
  [TYPES.INFO]: {
    bgColor: colors.yellow,
    textColor: colors.grey1,
  },
}

const Tooltip = ({ type = TYPES.INFO, children }) => {
  const { removeItemFromTray } = useTray()

  useEffect(() => {
    setTimeout(() => removeItemFromTray(), 5000)
  }, [removeItemFromTray])

  return <TooltipContainer {...types[type]}>{children}</TooltipContainer>
}

Tooltip.types = TYPES

export default Tooltip
