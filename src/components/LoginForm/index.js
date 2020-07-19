import React, { useState } from 'react'

import {
  LoginForm,
  CredentialsFieldset,
  ButtonsFieldset,
  InputLabel,
  Input,
  LoginButton,
  SignupButton,
} from './ui'

export default ({ onSubmit, onSingUpButtonClick }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
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

  return (
    <LoginForm onSubmit={handleFormSubmit}>
      <CredentialsFieldset>
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
            onChange={handleInputChange}
          />
        </InputLabel>
      </CredentialsFieldset>
      <ButtonsFieldset>
        <SignupButton type="button" onClick={onSingUpButtonClick}>
          Sign Up
        </SignupButton>
        <LoginButton type="submit">Log In</LoginButton>
      </ButtonsFieldset>
    </LoginForm>
  )
}
