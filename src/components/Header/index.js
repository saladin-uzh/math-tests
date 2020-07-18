import React from 'react'

import logo from '../../assets/logo.svg'

import { Header, Logo, PageHeading, UserName, LogoutButton } from './ui'

export default ({
  pageHeading,
  userName,
  onLogoutButtonClick,
  hasSignedUser = false,
}) => (
  <Header>
    <Logo src={logo} alt="Math tests" />
    <PageHeading>{pageHeading}</PageHeading>
    {hasSignedUser && (
      <>
        <UserName>{userName}</UserName>
        <LogoutButton onClick={onLogoutButtonClick}>Log out</LogoutButton>
      </>
    )}
  </Header>
)
