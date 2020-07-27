import React, { FunctionComponent, ReactPropTypes } from 'react'

import { useFirebase } from './context'

type User = {
  email?: string
  displayName?: string
  uid?: string
}

interface WithUserComponentProps extends ReactPropTypes {
  user: User
  [prop: string]: any
}

type WithUserComponent<P = WithUserComponentProps> = FunctionComponent<P>

export default (
  Component: FunctionComponent<any>
): WithUserComponent => props => {
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

  return <Component {...props} user={user} />
}
