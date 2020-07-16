import React, { useState } from 'react'

import {
  LoginForm,
  CredentialsFieldset,
  ButtonsFieldset,
  InputLabel,
  LoginButton,
  SignupButton,
} from './ui'

export default ({ loginUser }) => {
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

  return (
    <LoginForm>
      <CredentialsFieldset>
        <InputLabel>
          Your email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </InputLabel>
        <InputLabel>
          Your password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </InputLabel>
      </CredentialsFieldset>
      <ButtonsFieldset>
        <SignupButton type="button">Sign Up</SignupButton>
        <LoginButton type="button" onClick={() => loginUser(credentials)}>
          Log In
        </LoginButton>
      </ButtonsFieldset>
    </LoginForm>
  )
}
