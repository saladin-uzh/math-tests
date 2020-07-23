import React from 'react'

import { usePreloader, useTray } from '../utils'
import { useUserAPI } from '../utils/firebase'

import { PAGES } from '../constants'

import { AuthForm, Header, Tooltip } from '../components'

export default ({ history }) => {
  const { showPreloader, hidePreloader } = usePreloader()
  const { signUp } = useUserAPI()
  const { addItemToTray } = useTray()

  const handleUserSignUp = (credentials) => {
    showPreloader()
    signUp(credentials, ({ message }) => {
      hidePreloader()
      addItemToTray({
        type: Tooltip.types.ERROR,
        text: message,
      })
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
