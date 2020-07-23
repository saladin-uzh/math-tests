import styled from 'styled-components'

import { spacings } from '../../constants'

export const TooltipContainer = styled.div`
  background: ${({ bgColor }) => bgColor};
  margin: ${spacings.medium} 0 0;
  padding: ${spacings.medium};
  color: ${({ textColor }) => textColor};

  @keyframes show-tooltip {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }

  animation-name: show-tooltip;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  cursor: pointer;
`
