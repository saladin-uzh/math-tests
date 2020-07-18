import { useState, useEffect } from 'react'

import { useFirebase } from './context'
import { usePreloader } from '../preloader'

export default () => {
  const { auth } = useFirebase()
  const [isAuthentificated, setIsAuthentificated] = useState(false)
  const { hidePreloader } = usePreloader()

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setIsAuthentificated(Boolean(user))
      hidePreloader()
    })
  }, [auth, hidePreloader])

  return isAuthentificated
}
