import React, { useState, createContext, useContext, useCallback } from 'react'

import { Preloader } from '../components'

const PreloaderContext = createContext({
  isShown: true,
  showPreloader: () => {},
  hidePreloader: () => {},
})

export const withPreloader = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)

  const preloader = {
    isShown: isLoading,
    showPreloader: useCallback(() => setIsLoading(true), []),
    hidePreloader: useCallback(() => setIsLoading(false), []),
  }

  return (
    <PreloaderContext.Provider value={preloader}>
      <Preloader isShown={isLoading} />
      <Component preloader={preloader} {...props} />
    </PreloaderContext.Provider>
  )
}

export const usePreloader = () => {
  const preloader = useContext(PreloaderContext)
  return preloader
}
