import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { routes } from './constants'

const App = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export default () => (
  <App>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Router>
  </App>
)
