import { useState, useEffect, useContext } from 'react'

import { FirebaseContext } from './context'

export default () => {
  const [isAuthentificated, setIsAuthentificated] = useState(false)
  const { auth } = useContext(FirebaseContext)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setIsAuthentificated(true)
      else setIsAuthentificated(false)
    })
  }, [auth])

  return isAuthentificated
}
