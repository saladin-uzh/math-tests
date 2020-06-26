import React, { Children, createContext } from 'react'
import Firebase from './fbase'

const { Provider, Consumer } = createContext(new Firebase(false))

export const FirebaseProvider = ({ children }) => (
  <Provider value={new Firebase()}>{Children.only(children)}</Provider>
)

export const withFirebase = (Component) => {
  const FirebaseConsumer = (props) => (
    <Consumer>
      {(firebase) => <Component {...props} firebase={firebase} />}
    </Consumer>
  )

  return FirebaseConsumer
}
