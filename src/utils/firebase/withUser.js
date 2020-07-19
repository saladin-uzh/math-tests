import React from 'react'

import { useFirebase } from './context'

export default (Component) => (props) => {
  const { auth } = useFirebase()

  const user = {
    api: {
      signUp: (credentials, onError) => {
        const { email, password, name } = credentials

        return auth
          .createUserWithEmailAndPassword(email, password)
          .then(
            ({ user }) =>
              user.updateProfile({ displayName: name }).catch(onError),
            onError
          )
      },
      signIn: (credentials, onError) => {
        const { email, password } = credentials

        return auth.signInWithEmailAndPassword(email, password).catch(onError)
      },
      signOut: () =>
        auth.signOut().then(
          () => localStorage.clear(),
          (err) => console.error(err)
        ),
    },
    data: {
      email: '',
      displayName: '',
      uid: '',
    },
  }

  const { currentUser } = auth

  if (currentUser) {
    const { email, displayName, uid } = currentUser
    user.data = { email, displayName, uid }
  }

  return <Component user={user} {...props} />
}
