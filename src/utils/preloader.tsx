import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  FunctionComponent,
} from 'react'

const PreloaderContext = createContext({
  isShown: true,
  showPreloader: () => {},
  hidePreloader: () => {},
})

export const PreloaderProvider: FunctionComponent = ({ children }) => {
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

export const usePreloader = () => useContext(PreloaderContext)
