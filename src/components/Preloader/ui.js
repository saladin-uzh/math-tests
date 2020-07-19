import styled from 'styled-components'

import { colors } from '../../constants'

export const Preloader = styled.div`
  position: fixed;
  display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`
