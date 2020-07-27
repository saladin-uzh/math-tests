import { useState, useEffect } from 'react'

import { useFirebase } from './context'
import { usePreloader } from '../preloader'

export default (): boolean => {
  const { auth } = useFirebase()
  const [isAuthentificated, setIsAuthentificated] = useState(false)
  const { hidePreloader } = usePreloader()

  useEffect(() => {
    return auth.onAuthStateChanged((user: firebase.User | null) => {
      setIsAuthentificated(Boolean(user))
      hidePreloader()
    })
  }, [auth, hidePreloader])

  return isAuthentificated
}
