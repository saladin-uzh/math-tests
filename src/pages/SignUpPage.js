import React from 'react'

import { usePreloader } from '../utils'
import { withUser } from '../utils/firebase'

import { PAGES } from '../constants'

import { AuthForm, Header } from '../components'

const SignUpPage = ({
  user: {
    api: { signUp },
  },
  history,
}) => {
  const { showPreloader, hidePreloader } = usePreloader()

  const handleUserSignUp = (credentials) => {
    showPreloader()
    signUp(credentials, ({ message }) => {
      console.error(message)
      hidePreloader()
    })
  }

  const redirectToSignIn = () => history.replace(PAGES.LOGIN.path)

  const pageHeading = 'Register'

  return (
    <>
      <Header pageHeading={pageHeading} />
      <AuthForm
        type={AuthForm.types.SIGN_UP}
        onSubmit={handleUserSignUp}
        onSecondaryButtonClick={redirectToSignIn}
      />
    </>
  )
}

export default withUser(SignUpPage)
