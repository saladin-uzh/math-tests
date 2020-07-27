import React, { StrictMode } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { FirebaseProvider } from './utils/firebase'
import { PreloaderProvider, TrayProvider } from './utils'

import { Preloader, Tray } from './components'
import { GlobalStyles, AppContainer } from './AppUI'
import AppRoutes from './AppRoutes'

export default () => (
  <StrictMode>
    <GlobalStyles />
    <FirebaseProvider>
      <PreloaderProvider>
        <TrayProvider>
          <Router>
            <AppContainer>
              <Switch>
                <AppRoutes />
              </Switch>
            </AppContainer>
          </Router>
          <Tray />
        </TrayProvider>
        <Preloader />
      </PreloaderProvider>
    </FirebaseProvider>
  </StrictMode>
)
