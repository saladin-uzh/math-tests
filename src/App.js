import React, { StrictMode } from 'react'

import { FirebaseProvider } from './utils/firebase'
import { PreloaderProvider, TrayProvider } from './utils'

import { GlobalStyles } from './AppUI'
import GlobalRoutes from './AppRoutes'
import { Preloader, Tray } from './components'

export default () => (
  <StrictMode>
    <GlobalStyles />
    <FirebaseProvider>
      <PreloaderProvider>
        <TrayProvider>
          <GlobalRoutes />
          <Tray />
        </TrayProvider>
        <Preloader />
      </PreloaderProvider>
    </FirebaseProvider>
  </StrictMode>
)
