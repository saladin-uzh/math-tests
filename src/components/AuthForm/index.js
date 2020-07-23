import React, { useState } from 'react'

import { Button } from '..'
import {
  AuthForm,
  CredentialsFieldset,
  ButtonsFieldset,
  InputLabel,
  Input,
} from './ui'

const TYPES = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
}

const types = {
  [TYPES.SIGN_IN]: {
    secondaryButtonText: 'Sign Up',
    submitButtonText: 'Sign In',
  },
  [TYPES.SIGN_UP]: {
    defaultCredentials: { name: '', passwordConfirm: '' },
    secondaryButtonText: 'Sign In',
    submitButtonText: 'Sign Un',
  },
}

const Form = ({ type, onSubmit, onSecondaryButtonClick }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    ...types[type].defaultCredentials,
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(credentials)
  }

  const isTypeSignUp = type === TYPES.SIGN_UP
  const { secondaryButtonText, submitButtonText } = types[type]

  return (
    <AuthForm onSubmit={handleFormSubmit}>
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
          type={Button.types.LINK}
          onClick={onSecondaryButtonClick}
          isSecondary
        >
          {secondaryButtonText}
        </Button>
        <Button type={Button.types.SUBMIT}>{submitButtonText}</Button>
      </ButtonsFieldset>
    </AuthForm>
  )
}

Form.types = TYPES

export default Form
