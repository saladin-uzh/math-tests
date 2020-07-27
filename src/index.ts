import { createElement } from 'react'
import { render } from 'react-dom'

import { serviceWorker } from './utils'

import App from './App'

render(createElement(App), document.getElementById('root'))

serviceWorker.register()
