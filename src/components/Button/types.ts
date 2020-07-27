import { FunctionComponent } from 'react'

type REGULAR = 'primary'
type LINK = 'secondary'
type SUBMIT = 'submit'
type ICON = 'icon'

export const types = {
  regular: 'regular' as REGULAR,
  link: 'link' as LINK,
  submit: 'submit' as SUBMIT,
  icon: 'icon' as ICON,
}

type DOMButtonSubmit = 'submit'
type DOMButtonReset = 'reset'
type DOMButtonButton = 'button'

const DOMButtonTypes = {
  submit: 'submit' as DOMButtonSubmit,
  reset: 'reset' as DOMButtonReset,
  button: 'button' as DOMButtonButton,
}

interface TypesConfigFormat<
  B = DOMButtonSubmit | DOMButtonReset | DOMButtonButton
> {
  [type: string]: {
    buttonType: B
  }
}

export const typesConfig: TypesConfigFormat = {
  [types.regular]: {
    buttonType: DOMButtonTypes.button,
  },
  [types.link]: {
    buttonType: DOMButtonTypes.button,
  },
  [types.submit]: {
    buttonType: DOMButtonTypes.submit,
  },
  [types.icon]: {
    buttonType: DOMButtonTypes.button,
  },
}

interface ButtonProps {
  type: REGULAR | LINK | SUBMIT | ICON
  [prop: string]: any
}

export interface ButtonInterface<P = ButtonProps> extends FunctionComponent<P> {
  types: typeof types
}

export interface StyledButtonProps {
  icon?: string
}
