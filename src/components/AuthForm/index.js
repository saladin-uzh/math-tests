import React, { useState } from 'react'

import { useTray } from '../../utils'

import { Button, Tooltip } from '..'
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
    defaultCredentials: { name: '', confirmPassword: '' },
    secondaryButtonText: 'Sign In',
    submitButtonText: 'Sign Up',
  },
}

const Form = ({ type, onSubmit, onSecondaryButtonClick }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    ...types[type].defaultCredentials,
  })
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false)
  const { addItemToTray } = useTray()

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }))

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
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (isPasswordConfirmed) onSubmit(credentials)
    else
      addItemToTray({
        type: Tooltip.types.ERROR,
        text: 'Passwords do not match',
      })
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
              required
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
            required
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
            required
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
              required
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
