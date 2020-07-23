import React, { useState, useEffect } from 'react'

import { Button } from '..'
import {
  QuestionForm,
  QuestionText,
  AnswearsFieldset,
  AnswearLabel,
  AnswearInput,
  ButtonsFieldset,
  SubmitAnswearButton,
} from './ui'

export default ({
  id,
  questionText,
  answears,
  selectedAnswear,
  onNextButtonClick,
  onPrevButtonClick,
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

  const handleNextButtonClick = () => onNextButtonClick(answear)

  return (
    <QuestionForm>
      <QuestionText>{questionText}</QuestionText>
      <AnswearsFieldset>
        {answears &&
          answears.map((answear, index) => {
            const key = `${id}=${index}`
            const answearProps = {
              type: 'radio',
              name: 'answear',
              defaultChecked: selectedAnswear === index,
              value: index,
              onChange: handleAnswearSelect,
            }

            return (
              <AnswearLabel key={key}>
                <AnswearInput {...answearProps} />
                {answear}
              </AnswearLabel>
            )
          })}
      </AnswearsFieldset>
      <ButtonsFieldset>
        {isPrevButtonShown && (
          <Button onClick={onPrevButtonClick}>{'<<'}</Button>
        )}
        <SubmitAnswearButton
          type={Button.types.REGULAR}
          onClick={handleNextButtonClick}
        >
          {isLastStep ? 'Submit Answears' : 'Next Question'}
        </SubmitAnswearButton>
      </ButtonsFieldset>
    </QuestionForm>
  )
}
