import React from 'react'

import { withUser } from '../utils/firebase'

import { LoginForm, Header } from '../components'

const LoginPage = ({ loginUser }) => {
  const handleUserLogin = (credentials) => loginUser(credentials)

  return (
    <>
      <Header heading={'Login'} />
      <LoginForm loginUser={handleUserLogin} />
    </>
  )
}

export default withUser(LoginPage)
