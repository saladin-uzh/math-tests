import styled from 'styled-components'

import { colors } from '../../constants'

export const Preloader = styled.div`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.grey0};
`
