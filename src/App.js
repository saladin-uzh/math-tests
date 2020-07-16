import React from 'react'
import styled from 'styled-components'

import { Header, TestBlock } from './components'

const App = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export default () => {
  const titleBarText = 'Heading'

  return (
    <App>
      <Header heading={titleBarText} />
      <TestBlock />
    </App>
  )
}
