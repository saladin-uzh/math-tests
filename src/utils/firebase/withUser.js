import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { FirebaseContext } from './context'

export default (Component) => () => {
  const { auth } = useContext(FirebaseContext)
  const history = useHistory()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  const loginUser = ({ email, password }) => {
    return auth.signInWithEmailAndPassword(email, password).then(
      () => {
        history.replace(from)
      },
      (err) => console.error(err)
    )
  }

  return <Component loginUser={loginUser} />
}
