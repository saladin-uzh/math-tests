import React from 'react'
import styled from 'styled-components'

import logo from '../../logo.svg'

import { colors } from '../../constants'

const Header = styled.header`
  background-color: ${colors.main};
  min-height: 10vh;
  position: relative;
  display: flex;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: ${colors.text};
  box-shadow: 0 0 3px ${colors.shadow};
`

const AppLogo = styled.img`
  height: 10vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`

export default ({ heading }) => (
  <Header>
    <AppLogo src={logo} alt="logo" />
    <p>{heading}</p>
  </Header>
)
