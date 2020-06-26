import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './AppStyles'

import { Header } from './components'

const App = styled.div`
  text-align: center;
`

export default () => (
  <>
    <GlobalStyles />
    <App>
      <Header />
    </App>
  </>
)
