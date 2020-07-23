import React from 'react'

import { usePreloader, useTray } from '../utils'
import { useUserAPI } from '../utils/firebase'

import { PAGES } from '../constants'

import { AuthForm, Header, Tooltip } from '../components'

export default ({ history }) => {
  const { showPreloader, hidePreloader } = usePreloader()
  const { signIn } = useUserAPI()
  const { addItemToTray } = useTray()

  const handleUserSignIn = (credentials) => {
    showPreloader()

    signIn(credentials, ({ message }) => {
      hidePreloader()
      addItemToTray({
        type: Tooltip.types.ERROR,
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
        type={AuthForm.types.SIGN_IN}
        onSubmit={handleUserSignIn}
        onSecondaryButtonClick={redirectToSignUp}
      />
    </>
  )
}
