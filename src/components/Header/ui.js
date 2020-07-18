import styled from 'styled-components'

import { spacings, colors } from '../../constants'

export const Header = styled.header`
  background-color: ${colors.white};
  min-height: 10vh;
  position: relative;
  display: flex;
  align-items: center;

  box-shadow: 0 0 3px ${colors.grey0};
`

export const PageHeading = styled.h1`
  font-size: calc(${spacings.medium} + 2vmin);
  color: ${colors.grey1};
`

export const Logo = styled.img`
  height: 10vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`

export const UserName = styled.div`
  margin: 0 ${spacings.small} 0 auto;
`

export const LogoutButton = styled.button`
  margin: 0 ${spacings.large} 0 0;
`
