import styled from 'styled-components'

import { media, colors, spacings } from '../../constants'

import { types, StyledButtonProps } from './types'

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
`

const PrimaryButton = styled(StyledButton)`
  background: radial-gradient(
    ellipse farthest-corner at top left,
    ${colors.grey0} 0%,
    ${colors.grey1} 50%
  );
`

const SecondaryButton = styled(StyledButton)`
  background: transparent;
  border: none;
`

const IconButton = styled(StyledButton)`
  display: block;
  width: 2.5vh;
  height: 2.5vh;
  margin: 0 ${spacings.large} 0 auto;
  background: url(${({ icon }) => icon});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;

  ${media.medium`
      display: none;  
    `}
`

export default {
  [types.regular]: PrimaryButton,
  [types.link]: SecondaryButton,
  [types.submit]: PrimaryButton,
  [types.icon]: IconButton,
}
