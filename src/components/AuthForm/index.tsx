import React, { useState, FormEvent } from 'react'

import { Button } from '..'
import {
  AuthFormContainer,
  CredentialsFieldset,
  ButtonsFieldset,
  InputLabel,
  Input,
} from './ui'

import {
  types,
  typesConfig,
  Credentials,
  FormInterface,
  InputChangeEvent,
} from './types'

const Form: FormInterface = ({ type, onSubmit, onSecondaryButtonClick }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    ...typesConfig[type].defaultCredentials,
  } as Credentials)
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false)

  const isTypeSignUp = type === types.signUp

  const handleInputChange = (event: InputChangeEvent) => {
    const { name, value } = event.target

    setCredentials(credentials => ({
      ...credentials,
      [name]: value,
    }))

    if (isTypeSignUp)
      switch (name) {
        case 'confirmPassword':
          if (value === credentials.password) setIsPasswordConfirmed(true)
          else if (isPasswordConfirmed) setIsPasswordConfirmed(false)
          break
        case 'password':
          if (isPasswordConfirmed) setIsPasswordConfirmed(false)
          break
        default:
          break
      }
    else if (!isPasswordConfirmed) setIsPasswordConfirmed(true)
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit(credentials)
  }

  const { secondaryButtonText, submitButtonText } = typesConfig[type]

  return (
    <AuthFormContainer onSubmit={handleFormSubmit}>
      <CredentialsFieldset>
        {isTypeSignUp && (
          <InputLabel>
            Your Name:
            <Input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleInputChange}
            />
          </InputLabel>
        )}
        <InputLabel>
          Your email:
          <Input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </InputLabel>
        <InputLabel>
          Your password:
          <Input
            type="password"
            name="password"
            value={credentials.password}
            pattern={
              isTypeSignUp
                ? '^(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^wds:])([^s]){8,16}$'
                : undefined
            }
            onChange={handleInputChange}
          />
        </InputLabel>
        {isTypeSignUp && (
          <InputLabel>
            Confirm your password:
            <Input
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleInputChange}
            />
          </InputLabel>
        )}
      </CredentialsFieldset>
      <ButtonsFieldset>
        <Button
          onClick={onSecondaryButtonClick}
          type={Button.types.link}
          isSecondary>
          {secondaryButtonText}
        </Button>
        <Button type={Button.types.submit}>{submitButtonText}</Button>
      </ButtonsFieldset>
    </AuthFormContainer>
  )
}

Form.types = types

export default Form
