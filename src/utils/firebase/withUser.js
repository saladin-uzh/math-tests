import React from 'react'

import { useFirebase } from './context'

export default (Component) => (props) => {
  const { auth } = useFirebase()

  const user = {
    email: '',
    displayName: '',
    uid: '',
  }

  const { currentUser } = auth

  if (currentUser) {
    const { email, displayName, uid } = currentUser
    Object.assign(user, { email, displayName, uid })
  }

  return <Component user={user} {...props} />
}
