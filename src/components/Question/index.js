import React, { useState, useEffect } from 'react'

import {
  QuestionForm,
  QuestionText,
  AnswearsFieldset,
  ButtonsFieldset,
  PrevQuestionButton,
  SubmitAnswearButton,
} from './ui'

import { Answear } from '../../components'

export default ({
  id,
  questionText,
  answears,
  selectedAnswear,
  nextStep,
  prevStep,
  isPrevButtonShown,
  isLastStep,
}) => {
  const [answear, setAnswear] = useState()

  useEffect(() => {
    setAnswear({ id, answear: selectedAnswear })
  }, [id, selectedAnswear])

  const handleAnswearSelect = (event) => {
    setAnswear({
      id,
      answear: event.target.value,
    })
  }

  return (
    <QuestionForm>
      <QuestionText>{questionText}</QuestionText>
      <AnswearsFieldset>
        {answears &&
          answears.map((answear, index) => (
            <Answear
              key={`${id}=${index}`}
              value={index}
              text={answear}
              handleChange={handleAnswearSelect}
              isSelectedAnswear={selectedAnswear === index}
            />
          ))}
      </AnswearsFieldset>
      <ButtonsFieldset>
        {isPrevButtonShown && (
          <PrevQuestionButton type="button" onClick={() => prevStep()}>
            {'<<'}
          </PrevQuestionButton>
        )}
        <SubmitAnswearButton type="button" onClick={() => nextStep(answear)}>
          {isLastStep ? 'Submit Answears' : 'Next Question'}
        </SubmitAnswearButton>
      </ButtonsFieldset>
    </QuestionForm>
  )
}
