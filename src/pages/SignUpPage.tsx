import React from 'react'
import { useHistory } from 'react-router-dom'

import { usePreloader, useTray } from '../utils'
import { useUserAPI } from '../utils/firebase'

import { PAGES } from '../constants'

import { AuthForm, Header, Tooltip } from '../components'

type Credentials = {
  email: string
  password: string
  name?: string
}
export default () => {
  const { showPreloader, hidePreloader } = usePreloader()
  const { signUp } = useUserAPI()
  const { addItemToTray } = useTray()
  const history = useHistory()

  const handleUserSignUp = (credentials: Credentials) => {
    showPreloader()
    signUp(credentials, ({ message }) => {
      hidePreloader()
      addItemToTray({
        type: Tooltip.types.error,
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
        type={AuthForm.types.signUp}
        onSubmit={handleUserSignUp}
        onSecondaryButtonClick={redirectToSignIn}
      />
    </>
  )
}
