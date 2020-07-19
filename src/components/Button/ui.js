import styled from 'styled-components'

export const StyledButton = styled.button`
  cursor: pointer;

  ${({ isSecondary }) =>
    isSecondary &&
    `
    background: transparent;
    border: none; 
  `}
`
