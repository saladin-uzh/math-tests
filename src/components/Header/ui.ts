import styled from 'styled-components'

import { spacings, colors, media } from '../../constants'

import { VisibilityControledProps } from './types'

export const Header = styled.header`
  background-color: ${colors.white};
  min-height: 10vh;
  position: relative;
  display: flex;
  align-items: center;

  box-shadow: 0 0 ${spacings.small} ${colors.grey0};
`

export const PageHeading = styled.h1`
  font-size: calc(${spacings.medium} + 2vmin);
`

export const Logo = styled.img`
  height: 10vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`

export const FaintedBg = styled.div<VisibilityControledProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${colors.grey0};
  opacity: 0.5;

  z-index: 5;

  ${media.medium`
    display: none;
  `}
`

export const UserBlock = styled.div<VisibilityControledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  margin: 0 0 0 auto;
  padding: 0 ${spacings.large};
  right: 0;
  top: 0;
  height: 100vh;

  background: ${colors.white};
  box-shadow: 0 0 ${spacings.small} ${colors.grey0};

  z-index: 10;

  transform: ${({ isVisible }) => (isVisible ? 'none' : 'translateX(100%)')};
  transition-duration: 0.3s;
  transition-timing-function: linear;
  transition-property: transform;

  ${media.medium`
    flex-direction: row;
    position: relative;
    height: auto;
    background: transparent;
    box-shadow: unset;
    transition: none;
    transform: none;
  `}
`

export const UserName = styled.p`
  margin: 0 0 ${spacings.large};
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${colors.grey0};
  cursor: pointer;

  ${media.medium`
    margin: 0 ${spacings.small} 0 0;
    height: auto;
    width: auto;
    display: block;
    text-align: left;
    border: unset;
  `}
`
