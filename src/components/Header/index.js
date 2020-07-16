import React from 'react'

import logo from '../../assets/logo.svg'

import { Header, Logo } from './ui'

export default ({ heading }) => (
  <Header>
    <Logo src={logo} alt="logo" />
    <p>{heading}</p>
  </Header>
)
