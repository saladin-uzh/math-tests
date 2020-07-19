import React, { StrictMode } from 'react'

import { FirebaseProvider } from './utils/firebase'
import { PreloaderProvider } from './utils/preloader'

import { GlobalStyles } from './AppUI'
import GlobalRoutes from './AppRoutes'
import { Preloader } from './components'

export default () => (
  <StrictMode>
    <GlobalStyles />
    <FirebaseProvider>
      <PreloaderProvider>
        <Preloader />
        <GlobalRoutes />
      </PreloaderProvider>
    </FirebaseProvider>
  </StrictMode>
)
