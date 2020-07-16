import React from 'react'
import ReactDOM from 'react-dom'

import { FirebaseProvider } from './utils/firebase'

import GlobalStyles from './AppStyles'
import App from './App'

ReactDOM.render(
  <>
    <GlobalStyles />
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </>,
  document.getElementById('root')
)
