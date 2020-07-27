import React from 'react'
import { useHistory } from 'react-router-dom'

import { usePreloader, useTray } from '../utils'
import { useUserAPI } from '../utils/firebase'

import { PAGES } from '../constants'

import { AuthForm, Header, Tooltip } from '../components'

interface Credentials {
  email: string
  password: string
  name?: string
  confirmPassword?: string
}

export default () => {
  const { showPreloader, hidePreloader } = usePreloader()
  const { signIn } = useUserAPI()
  const { addItemToTray } = useTray()
  const history = useHistory()

  const handleUserSignIn = (credentials: Credentials) => {
    showPreloader()

    signIn(credentials, ({ message }) => {
      hidePreloader()
      addItemToTray({
        type: Tooltip.types.error,
        text: message,
      })
    })
  }

  const redirectToSignUp = () => history.replace(PAGES.SIGNUP.path)

  const pageHeading = 'Login'

  return (
    <>
      <Header pageHeading={pageHeading} />
      <AuthForm
        type={AuthForm.types.signIn}
        onSubmit={handleUserSignIn}
        onSecondaryButtonClick={redirectToSignUp}
      />
    </>
  )
}
