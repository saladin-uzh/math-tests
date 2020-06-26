import React from 'react'
import styled from 'styled-components'

import logo from '../../logo.svg'

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`

const AppLink = styled.a`
  color: #61dafb;
`

export default () => (
  <Header>
    <AppLogo src={logo} alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <AppLink
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </AppLink>
  </Header>
)
