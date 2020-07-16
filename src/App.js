import React from 'react'

import { FirebaseProvider } from './utils/firebase'

import { GlobalStyles } from './AppUI'
import GlobalRoutes from './AppRoutes'

export default () => (
  <>
    <GlobalStyles />
    <FirebaseProvider>
      <GlobalRoutes />
    </FirebaseProvider>
  </>
)
