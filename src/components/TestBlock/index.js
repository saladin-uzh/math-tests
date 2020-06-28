import React, { useState, useEffect } from 'react'

import Question from '../Question'

const QUESTIONS = [
  {
    questionText: 'Question 1 text?',
    answears: [
      'First answear',
      'Second answear',
      'Third answear',
      'Fourth answear',
    ],
  },
  {
    questionText: 'Question 2 text?',
    answears: [
      'First answear 2',
      'Second answear 2',
      'Third answear 2',
      'Fourth answear 2',
    ],
  },
  {
    questionText: 'Question 3 text?',
    answears: [
      'First answear 3',
      'Second answear 3',
      'Third answear 3',
      'Fourth answear 3',
    ],
  },
  {
    questionText: 'Question 4 text?',
    answears: [
      'First answear 4',
      'Second answear 4',
      'Third answear 4',
      'Fourth answear 4',
    ],
  },
  {
    questionText: 'Question 5 text?',
    answears: [
      'First answear 5',
      'Second answear 5',
      'Third answear 5',
      'Fourth answear 5',
    ],
  },
]

export default () => {
  const [step, setStep] = useState(0)
  const [isPrevButtonShown, setIsPrevButtonShown] = useState(false)
  const [isLastStep, setIsLastStep] = useState(false)

  const submitAnswears = () => alert('Answears submitted!')

  const nextStep = () => {
    if (!isLastStep) setStep(step + 1)
    else submitAnswears()
  }

  const prevStep = () => setStep(step - 1)

  useEffect(() => {
    if (step > 0) {
      if (!isPrevButtonShown) setIsPrevButtonShown(true)
    } else {
      setIsPrevButtonShown(false)
    }

    if (step + 1 === QUESTIONS.length) setIsLastStep(true)
    else setIsLastStep(false)
  }, [step, isPrevButtonShown])

  return (
    <Question
      {...QUESTIONS[step]}
      nextStep={nextStep}
      prevStep={prevStep}
      isPrevButtonShown={isPrevButtonShown}
      isLastStep={isLastStep}
    />
  )
}
