import React, { createContext } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'

import { firebaseConfig } from '../../config'

export const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
  const app = firebase.initializeApp(firebaseConfig)

  const firebaseContext = {
    firestore: app.firestore(),
  }

  return (
    <FirebaseContext.Provider value={firebaseContext}>
      {children}
    </FirebaseContext.Provider>
  )
}
