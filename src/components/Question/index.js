import React, { useState, useEffect } from 'react'

import {
  QuestionForm,
  QuestionText,
  AnswearsFieldset,
  AnswearLabel,
  AnswearInput,
  ButtonsFieldset,
  PrevQuestionButton,
  SubmitAnswearButton,
} from './ui'

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
            <AnswearLabel>
              <AnswearInput
                key={`${id}=${index}`}
                type="radio"
                name="answear"
                value={index}
                defaultChecked={selectedAnswear === index}
                onChange={handleAnswearSelect}
              />
              {answear}
            </AnswearLabel>
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
