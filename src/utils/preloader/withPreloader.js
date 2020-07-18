import React, { useEffect } from 'react'

import { usePreloader } from './context'

export default (Component) => (props) => {
  const preloader = usePreloader()

  const { showPreloader } = preloader

  useEffect(() => {
    return () => showPreloader()
  }, [showPreloader])

  return <Component preloader={preloader} {...props} />
}
