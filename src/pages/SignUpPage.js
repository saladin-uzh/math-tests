import React from 'react'

import { withUser } from '../utils/firebase'
import { usePreloader } from '../utils/preloader'

import { SignUpForm, Header } from '../components'

const SignUpPage = ({
  user: {
    api: { signUp },
  },
}) => {
  const { showPreloader } = usePreloader()

  const handleUserSignUp = (credentials) => {
    showPreloader()
    signUp(credentials)
  }

  const pageHeading = 'Register'

  return (
    <>
      <Header pageHeading={pageHeading} />
      <SignUpForm onSignUpButtonClick={handleUserSignUp} />
    </>
  )
}

export default withUser(SignUpPage)
