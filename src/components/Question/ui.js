import styled from 'styled-components'

import { spacings } from '../../constants'

export const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 ${spacings.large};
`

export const QuestionText = styled.p`
  margin: ${spacings.large} 0 ${spacings.medium} 0;
  align-self: flex-start;
`

export const AnswearsFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  align-items: flex-start;
  text-align: start;
  padding: 0;
`

export const AnswearLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0 0 ${spacings.small};
`

export const AnswearInput = styled.input`
  margin: 0 ${spacings.small} 0 0;
`

export const ButtonsFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 0;
  margin: ${spacings.small} 0 0;
`

export const PrevQuestionButton = styled.button`
  margin: 0 auto 0 0;
`

export const SubmitAnswearButton = styled.button`
  margin: 0 ${spacings.large} 0 0;
`
