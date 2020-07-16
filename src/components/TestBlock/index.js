import React, { useState, useEffect } from 'react'

import { withQuestions } from '../../utils/firebase'

import Question from '../Question'

const TestBlock = ({ questions }) => {
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

    if (step + 1 === questions.length) setIsLastStep(true)
    else setIsLastStep(false)
  }, [step, questions.length, isPrevButtonShown])

  return (
    <Question
      nextStep={nextStep}
      prevStep={prevStep}
      isPrevButtonShown={isPrevButtonShown}
      isLastStep={isLastStep}
      {...questions[step]}
    />
  )
}

export default withQuestions(TestBlock)
