import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  FunctionComponent,
} from 'react'

import { TrayContext as TrayContextInterface, TooltipData } from './types'

const defaultContext: TrayContextInterface = {
  tray: [],
  addItemToTray: () => {},
  removeItemFromTray: () => {},
}

const TrayContext = createContext(defaultContext)

export const TrayProvider: FunctionComponent = ({ children }) => {
  const [tray, setTray] = useState([] as TooltipData[])

  const addItemToTray = useCallback((item: TooltipData) => {
    setTray(tray => [...tray, item])
  }, [])

  const removeItemFromTray = useCallback(() => {
    setTray(tray => tray.slice(1))
  }, [])

  const providerValue = {
    tray,
    addItemToTray,
    removeItemFromTray,
  }

  return (
    <TrayContext.Provider value={providerValue}>
      {children}
    </TrayContext.Provider>
  )
}

export const useTray = () => useContext(TrayContext)
