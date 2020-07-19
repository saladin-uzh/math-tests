import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu-button.svg'

import {
  Header,
  Logo,
  PageHeading,
  UserBlock,
  MenuButton,
  FaintedBg,
  UserName,
  LogoutButton,
} from './ui'

export default ({
  pageHeading,
  userName,
  onLogoutButtonClick,
  hasSignedUser = false,
}) => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggleMenu = () => setIsMenuShown((isMenuShown) => !isMenuShown)

  return (
    <Header>
      <Logo src={logo} alt="Math tests" />
      <PageHeading>{pageHeading}</PageHeading>
      {hasSignedUser && (
        <>
          <MenuButton icon={menuIcon} onClick={toggleMenu} />
          <FaintedBg isVisible={isMenuShown} onClick={toggleMenu} />
          <UserBlock isVisible={isMenuShown}>
            <UserName>{userName}</UserName>
            <LogoutButton onClick={onLogoutButtonClick}>Log out</LogoutButton>
          </UserBlock>
        </>
      )}
    </Header>
  )
}
