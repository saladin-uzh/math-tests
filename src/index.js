import React from 'react'
import ReactDOM from 'react-dom'

import { serviceWorker } from './utils'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
