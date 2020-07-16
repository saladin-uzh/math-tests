import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import GlobalStyles from './AppStyles'
import { FirebaseProvider } from './utils/firebase'

ReactDOM.render(
  <>
    <GlobalStyles />
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </>,
  document.getElementById('root')
)
