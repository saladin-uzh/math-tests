import React from 'react'

import { StyledButton } from './ui'

const TYPES = {
  REGULAR: 'primary',
  LINK: 'secondary',
  SUBMIT: 'submit',
}

const types = {
  [TYPES.REGULAR]: {
    isSecondary: false,
    buttonType: 'button',
  },
  [TYPES.LINK]: {
    isSecondary: true,
    buttonType: 'button',
  },
  [TYPES.SUBMIT]: {
    isSecondary: false,
    buttonType: 'submit',
  },
}

const Button = ({ children, type = TYPES.REGULAR, ...buttonProps }) => {
  const { isSecondary, buttonType } = types[type]

  return (
    <StyledButton type={buttonType} isSecondary={isSecondary} {...buttonProps}>
      {children}
    </StyledButton>
  )
}

Button.types = TYPES

export default Button
