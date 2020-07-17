import { useState, useEffect, useContext } from 'react'

import { FirebaseContext } from './context'

export default () => {
  const { auth } = useContext(FirebaseContext)
  const [isAuthentificated, setIsAuthentificated] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => setIsAuthentificated(Boolean(user)))
  }, [auth])

  return isAuthentificated
}
