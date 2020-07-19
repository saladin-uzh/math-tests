import React, { createContext, useState, useCallback, useContext } from 'react'

const PreloaderContext = createContext({
  isShown: true,
  showPreloader: () => {},
  hidePreloader: () => {},
})

export const PreloaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const preloader = {
    isShown: isLoading,
    showPreloader: useCallback(() => setIsLoading(true), []),
    hidePreloader: useCallback(() => setIsLoading(false), []),
  }

  return (
    <PreloaderContext.Provider value={preloader}>
      {children}
    </PreloaderContext.Provider>
  )
}

export const usePreloader = () => {
  const preloader = useContext(PreloaderContext)
  return preloader
}
