import React, { useEffect } from 'react'

import { useTray } from '../../utils'

import { TooltipContainer } from './ui'

import { types, typesConfig, TooltipInterface } from './types'

const Tooltip: TooltipInterface = ({ type, children }) => {
  const { removeItemFromTray } = useTray()

  useEffect(() => {
    setTimeout(() => removeItemFromTray(), 5000)
  }, [removeItemFromTray])

  return <TooltipContainer {...typesConfig[type]}>{children}</TooltipContainer>
}

Tooltip.types = types

export default Tooltip
