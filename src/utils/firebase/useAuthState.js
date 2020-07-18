import { useState, useEffect } from 'react'

import { useFirebase } from './context'

export default () => {
  const { auth } = useFirebase()
  const [isAuthentificated, setIsAuthentificated] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => setIsAuthentificated(Boolean(user)))
  }, [auth])

  return isAuthentificated
}
