import { FunctionComponent, ChangeEvent } from 'react'

type SIGN_IN = 'signIn'
type SIGN_UP = 'signUp'

export const types = {
  signIn: 'signIn' as SIGN_IN,
  signUp: 'signUp' as SIGN_UP,
}

interface DefaultCredentials {
  name: string
  confirmPassword: string
}

interface TypesConfigFormat<D = DefaultCredentials> {
  [type: string]: {
    secondaryButtonText: string
    submitButtonText: string
    defaultCredentials?: D
  }
}

export const typesConfig: TypesConfigFormat = {
  [types.signIn]: {
    secondaryButtonText: 'Sign Up',
    submitButtonText: 'Sign In',
  },
  [types.signUp]: {
    defaultCredentials: { name: '', confirmPassword: '' },
    secondaryButtonText: 'Sign In',
    submitButtonText: 'Sign Un',
  },
}

export interface Credentials {
  email: string
  password: string
  name?: string
  confirmPassword?: string
}

interface FormProps {
  type: SIGN_IN | SIGN_UP
  onSubmit: (credentials: Credentials) => void
  onSecondaryButtonClick: () => void
}

export interface FormInterface<P = FormProps> extends FunctionComponent<P> {
  types: typeof types
}

interface InputChangeEventTarget {
  name: string
  value: string
}

export type InputChangeEvent<T = InputChangeEventTarget> = ChangeEvent<T>
