import React, { createContext, useState, useContext, useCallback } from 'react'

const TrayContext = createContext({
  tray: [],
  addItemToTray: () => {},
  removeItemFromTray: () => {},
})

export const TrayProvider = ({ children }) => {
  const [tray, setTray] = useState([])

  const addItemToTray = useCallback((item) => {
    setTray((tray) => [...tray, item])
  }, [])

  const removeItemFromTray = useCallback(() => {
    setTray((tray) => tray.slice(1))
  }, [])

  return (
    <TrayContext.Provider value={{ tray, addItemToTray, removeItemFromTray }}>
      {children}
    </TrayContext.Provider>
  )
}

export const useTray = () => {
  const { tray, addItemToTray, removeItemFromTray } = useContext(TrayContext)

  return { tray, addItemToTray, removeItemFromTray }
}
