import React from 'react'

import { withUser } from '../utils/firebase'
import { usePreloader } from '../utils'

import { LoginForm, Header } from '../components'

const LoginPage = ({
  user: {
    api: { signIn },
  },
}) => {
  const { showPreloader } = usePreloader()

  const handleUserSignIn = (credentials) => {
    showPreloader()
    signIn(credentials)
  }

  const pageHeading = 'Login'

  return (
    <>
      <Header pageHeading={pageHeading} />
      <LoginForm onLoginButtonClick={handleUserSignIn} />
    </>
  )
}

export default withUser(LoginPage)
