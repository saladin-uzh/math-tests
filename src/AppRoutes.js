import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { useAuthState } from './utils/firebase'

import { routes } from './constants'

import { AppContainer } from './AppUI'

export default () => {
  const isAuthentificated = useAuthState()

  return (
    <Router>
      <AppContainer>
        <Switch>
          {routes.map(({ isPrivate, component: Component, ...routeProps }) => (
            <Route
              {...routeProps}
              render={(componentProps) =>
                isPrivate ? (
                  isAuthentificated ? (
                    <Component {...componentProps} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/login',
                        state: { from: componentProps.location },
                      }}
                    />
                  )
                ) : !isAuthentificated ? (
                  <Component {...componentProps} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          ))}
        </Switch>
      </AppContainer>
    </Router>
  )
}
