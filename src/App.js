import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { FirebaseProvider } from './utils/firebase'

import { routes } from './constants'

import { GlobalStyles, AppContainer } from './AppUI'

import { Header } from './components'

export default () => (
  <>
    <GlobalStyles />
    <FirebaseProvider>
      <Router>
        <AppContainer>
          <Header heading={'Heading'} />
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </AppContainer>
      </Router>
    </FirebaseProvider>
  </>
)
