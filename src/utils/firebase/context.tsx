import React, { createContext, useContext, FunctionComponent } from 'react'

import firebase, { auth, firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { firebaseConfig } from '../../config'

// interface FirebaseContextInterface {
//   firestore: firebase.firestore.Firestore
//   auth: firebase.auth.Auth
// }

const app = firebase.initializeApp(firebaseConfig)

const FirebaseContext = createContext({
  firestore: firestore(),
  auth: auth(),
})

export const FirebaseProvider: FunctionComponent = ({ children }) => {
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

export const useFirebase = () => useContext(FirebaseContext)
