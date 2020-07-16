import React, { useState, useEffect } from 'react'

import { useAnswears, useStep } from '../utils'
import { withQuestions } from '../utils/firebase'

import { Question } from '../components'

const HomePage = ({ questions }) => {
  const [step, setStep] = useStep()
  const [answears, setAnswears] = useAnswears()

  const [currentQuestion, setCurrentQuestion] = useState({})
  const [selectedAnswear, setSelectedAnswear] = useState(null)

  const handleAnswearsChange = (newAnswear) => {
    const newAnswears = answears || []

    const targetIndex = newAnswears.findIndex(
      ({ id }) => id === questions[step].id
    )

    if (targetIndex >= 0) newAnswears.splice(targetIndex, 1, newAnswear)
    else newAnswears.push(newAnswear)

    setAnswears(newAnswears)
  }

  const nextStep = (newAnswear) => {
    handleAnswearsChange(newAnswear)

    if (!isLastStep) setStep(step + 1)
    else submitAnswears()
  }

  const prevStep = () => setStep(step - 1)

  const submitAnswears = () => alert('Answears submitted!')

  useEffect(() => {
    if (questions[step]) {
      setCurrentQuestion(questions[step])

      if (answears) {
        const selectedAnswearIndex = answears.findIndex(
          ({ id }) => id === questions[step].id
        )

        if (selectedAnswearIndex >= 0)
          setSelectedAnswear(parseInt(answears[selectedAnswearIndex].answear))
      }
    }
  }, [step, questions, answears])

  const isPrevButtonShown = step > 0
  const isLastStep = step + 1 === questions.length

  return (
    <Question
      nextStep={nextStep}
      prevStep={prevStep}
      isPrevButtonShown={isPrevButtonShown}
      isLastStep={isLastStep}
      selectedAnswear={selectedAnswear}
      {...currentQuestion}
    />
  )
}

export default withQuestions(HomePage)
