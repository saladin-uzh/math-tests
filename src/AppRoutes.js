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

const PrivateRoute = ({
  component: Component,
  isAuthentificated,
  ...route
}) => (
  <Route
    {...route}
    render={(props) =>
      isAuthentificated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

const PublicRoute = ({ component: Component, isAuthentificated, ...route }) => (
  <Route
    {...route}
    render={(props) =>
      !isAuthentificated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)

const AppRoutes = () => {
  const isAuthentificated = useAuthState()

  return (
    <Router>
      <AppContainer>
        <Switch>
          {routes.map(({ isPrivate, ...route }) =>
            isPrivate ? (
              <PrivateRoute isAuthentificated={isAuthentificated} {...route} />
            ) : (
              <PublicRoute isAuthentificated={isAuthentificated} {...route} />
            )
          )}
        </Switch>
      </AppContainer>
    </Router>
  )
}

export default AppRoutes
