import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu-button.svg'

import { Header, Logo, PageHeading, UserBlock, FaintedBg, UserName } from './ui'
import { Button } from '..'

import { HeaderProps } from './types'

export default ({
  pageHeading = 'Math Tests',
  userName = '',
  hasSignedUser = false,
  onLogoutButtonClick = () => {},
  onUserNameClick = () => {},
}: HeaderProps) => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggleMenu = () => setIsMenuShown(isMenuShown => !isMenuShown)

  return (
    <Header>
      <Logo src={logo} alt="Math tests" />
      <PageHeading>{pageHeading}</PageHeading>
      {hasSignedUser && (
        <>
          <Button
            type={Button.types.icon}
            icon={menuIcon}
            onClick={toggleMenu}
          />
          <FaintedBg isVisible={isMenuShown} onClick={toggleMenu} />
          <UserBlock isVisible={isMenuShown}>
            <UserName onClick={onUserNameClick}>{userName}</UserName>
            <Button type={Button.types.regular} onClick={onLogoutButtonClick}>
              Log out
            </Button>
          </UserBlock>
        </>
      )}
    </Header>
  )
}
