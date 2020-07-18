import React from 'react'

import { withPreloader } from '../utils'
import { withUser } from '../utils/firebase'

import { LoginForm, Header } from '../components'

const LoginPage = ({
  user: {
    api: { signIn },
  },
  preloader: { showPreloader },
}) => {
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

export default withUser(withPreloader(LoginPage))
