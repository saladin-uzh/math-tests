import React from 'react'

import { usePreloader } from '../utils'
import { withUser } from '../utils/firebase'

import { PAGES } from '../constants'

import { LoginForm, Header } from '../components'

const LoginPage = ({
  user: {
    api: { signIn },
  },
  history,
}) => {
  const { showPreloader, hidePreloader } = usePreloader()
  const handleUserSignIn = (credentials) => {
    showPreloader()

    signIn(credentials, ({ message }) => {
      hidePreloader()
      console.error(message)
    })
  }

  const redirectToSignUp = () => history.replace(PAGES.SIGNUP.path)

  const pageHeading = 'Login'

  return (
    <>
      <Header pageHeading={pageHeading} />
      <LoginForm
        onSubmit={handleUserSignIn}
        onSingUpButtonClick={redirectToSignUp}
      />
    </>
  )
}

export default withUser(LoginPage)
