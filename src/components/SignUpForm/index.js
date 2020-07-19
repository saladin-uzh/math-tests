import React, { useState } from 'react'

import {
  LoginForm,
  CredentialsFieldset,
  ButtonsFieldset,
  InputLabel,
  Input,
  SignUpButton,
  SignInButton,
} from './ui'

export default ({ onSubmit, onSignInButtonClick }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    onSubmit(credentials)
  }

  return (
    <LoginForm onSubmit={handleFormSubmit}>
      <CredentialsFieldset>
        <InputLabel>
          Your Name:
          <Input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleInputChange}
          />
        </InputLabel>
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
            pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </InputLabel>
        <InputLabel>
          Confirm your password:
          <Input
            type="password"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleInputChange}
          />
        </InputLabel>
      </CredentialsFieldset>
      <ButtonsFieldset>
        <SignInButton type="button" onClick={onSignInButtonClick}>
          Sign In
        </SignInButton>
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </ButtonsFieldset>
    </LoginForm>
  )
}
