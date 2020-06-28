import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './AppStyles'

import { Header, Question } from './components'

const App = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export default () => (
  <>
    <GlobalStyles />
    <App>
      <Header heading={'Heading'} />
      <Question />
    </App>
  </>
)
