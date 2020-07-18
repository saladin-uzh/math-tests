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

export default ({ onLoginButtonClick }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleLoginButtonClick = () => onLoginButtonClick(credentials)

  return (
    <LoginForm>
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
        <SignupButton type="button">Sign Up</SignupButton>
        <LoginButton type="button" onClick={handleLoginButtonClick}>
          Log In
        </LoginButton>
      </ButtonsFieldset>
    </LoginForm>
  )
}
