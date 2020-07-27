import React from 'react'
import styled from 'styled-components'

import { withUser, useUserAPI } from '../utils/firebase'

import { spacings, media } from '../constants'

import { Header, TestsList, Button, SettingsItem } from '../components'

const UserProfile = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  margin: ${spacings.small} ${spacings.small} 0;

  ${media.small`
    flex-direction: row;
  `}
`

const UserTests = styled.section`
  padding: ${spacings.medium} ${spacings.large};
  text-align: left;
`

interface User {
  email: string
  displayName?: string
}

interface HomePageProps {
  user: User
  (...props: string[]): any
}

const UserProfilePage = ({ user: { displayName, email } }: HomePageProps) => {
  const { signOut } = useUserAPI()

  const userName = displayName || email

  return (
    <>
      <Header
        pageHeading={userName}
        userName={userName}
        onLogoutButtonClick={signOut}
        hasSignedUser
      />
      <UserProfile>
        <SettingsItem caption="Your email:" currentValue={email} />
        <SettingsItem caption="Your can change your password" />
        <SettingsItem
          caption="You can delete your profile"
          changeButtonText="Delete"
        />
      </UserProfile>
      <UserTests>
        <TestsList />
        <Button type={Button.types.regular}>Take test</Button>
      </UserTests>
    </>
  )
}

export default withUser(UserProfilePage)
