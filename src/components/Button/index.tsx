import React from 'react'

import ButtonUI from './ui'

import { types, typesConfig, ButtonInterface } from './types'

const Button: ButtonInterface = ({ children, type, ...buttonProps }) => {
  const { buttonType } = typesConfig[type]

  const ButtonToRender = ButtonUI[type]

  return (
    <ButtonToRender {...buttonProps} type={buttonType}>
      {children}
    </ButtonToRender>
  )
}

Button.types = types

export default Button
