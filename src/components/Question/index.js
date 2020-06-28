import React from 'react'
import styled from 'styled-components'

import Answear from './Answear'

const Question = styled.form`
  display: flex;
  flex-direction: column;
`

const QuestionText = styled.p`
  margin-left: 3vh;
  align-self: flex-start;
`

const AnswearsBlock = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  align-items: flex-start;
`

const ButtonsBlock = styled.fieldset`
  display: flex;
  justify-content: space-between;
  border: none;
`

const PrevQuestionButton = styled.button``

const SubmitAnswearButton = styled.button`
  margin: 0 0 0 auto;
`

export default ({
  questionText,
  answears,
  nextStep,
  prevStep,
  isPrevButtonShown,
  isLastStep,
}) => (
  <Question>
    <QuestionText>{questionText}</QuestionText>
    <AnswearsBlock>
      {answears.map((answear, index) => (
        <Answear value={index} text={answear} />
      ))}
    </AnswearsBlock>
    <ButtonsBlock>
      {isPrevButtonShown && (
        <PrevQuestionButton type="button" onClick={() => prevStep()}>
          {'<<'}
        </PrevQuestionButton>
      )}
      <SubmitAnswearButton type="button" onClick={() => nextStep()}>
        {isLastStep ? 'Submit Answears' : 'Next Question'}
      </SubmitAnswearButton>
    </ButtonsBlock>
  </Question>
)
