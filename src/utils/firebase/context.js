import React, { createContext, useContext } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { firebaseConfig } from '../../config'

const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
  const app = firebase.initializeApp(firebaseConfig)

  const firebaseContext = {
    firestore: app.firestore(),
    auth: app.auth(),
  }

  return (
    <FirebaseContext.Provider value={firebaseContext}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext)
  return firebase
}
