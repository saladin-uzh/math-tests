import React from 'react'

import { withUser } from '../utils/firebase'

import { LoginForm, Header } from '../components'

const LoginPage = ({
  user: {
    api: { signIn },
  },
}) => {
  const handleUserSignIn = (credentials) => signIn(credentials)

  const pageHeading = 'Login'

  return (
    <>
      <Header pageHeading={pageHeading} />
      <LoginForm onLoginButtonClick={handleUserSignIn} />
    </>
  )
}

export default withUser(LoginPage)
