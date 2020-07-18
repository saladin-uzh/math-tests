import React from 'react'
// import { useHistory, useLocation } from 'react-router-dom'

import { useFirebase } from './context'

export default (Component) => (props) => {
  const { auth } = useFirebase()
  const { history, location } = props

  const user = {
    api: {
      signIn: ({ email, password }) => {
        const { from } = location.state || { from: { pathname: '/' } }

        return auth.signInWithEmailAndPassword(email, password).then(
          () => {
            history.replace(from)
          },
          (err) => console.error(err)
        )
      },
      signOut: () =>
        auth.signOut().then(
          () => console.log('Logged Out'),
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
