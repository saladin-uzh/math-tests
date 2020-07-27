import React, { useState, useEffect } from 'react'

import { Button } from '..'
import {
  QuestionForm,
  QuestionText,
  AnswearsFieldset,
  AnswearLabel,
  AnswearInput,
  ButtonsFieldset,
} from './ui'

import { QuestionProps, Answear, AnswearSelectEvent } from './types'

export default ({
  id,
  questionText,
  answears,
  selectedAnswear,
  onNextButtonClick,
  onPrevButtonClick,
  isPrevButtonShown,
  isLastStep,
}: QuestionProps) => {
  const [answear, setAnswear] = useState({ id: '', answear: '' } as Answear)

  useEffect(() => {
    if (selectedAnswear) setAnswear({ id, answear: selectedAnswear.toString() })
  }, [id, selectedAnswear])

  const handleAnswearSelect = (event: AnswearSelectEvent) => {
    const { value } = event.target

    setAnswear({
      id,
      answear: value || '',
    })
  }

  const handleNextButtonClick = () => onNextButtonClick(answear)

  const prevButtonText = '<<'
  const submitButtonText = isLastStep ? 'Submit Answears' : 'Next Question'

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
          <Button type={Button.types.regular} onClick={onPrevButtonClick}>
            {prevButtonText}
          </Button>
        )}
        <Button type={Button.types.regular} onClick={handleNextButtonClick}>
          {submitButtonText}
        </Button>
      </ButtonsFieldset>
    </QuestionForm>
  )
}
