import styled from 'styled-components'

import { spacings } from '../../constants'

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${spacings.small} 0 0;
`

export const CredentialsFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: none;
`

export const ButtonsFieldset = styled.fieldset`
  display: flex;
  justify-content: flex-end;
  border: none;
`

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: ${spacings.medium} 0 0;
`

export const Input = styled.input`
  margin: ${spacings.small} 0 0;
`

export const LoginButton = styled.button`
  margin: 0 0 ${spacings.small};
`

export const SignupButton = styled.button`
  background: transparent;
  border: none;
`
