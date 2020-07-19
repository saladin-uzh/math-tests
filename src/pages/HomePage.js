import React, { useState, useEffect } from 'react'

import { useAnswears, useStep, usePreloader } from '../utils'
import { withQuestions, withUser, useUserAPI } from '../utils/firebase'

import { Question, Header } from '../components'
import { PAGES } from '../constants'

const HomePage = ({ user: { email, displayName }, questions, history }) => {
  const [answears, setAnswears] = useAnswears()
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [selectedAnswear, setSelectedAnswear] = useState(null)
  const [step, setStep] = useStep()
  const { showPreloader, hidePreloader } = usePreloader()
  const { signOut } = useUserAPI()

  const handleAnswearsChange = (newAnswear) => {
    const newAnswears = answears || []

    const targetIndex = newAnswears.findIndex(
      ({ id }) => id === questions[step].id
    )

    if (targetIndex >= 0) newAnswears.splice(targetIndex, 1, newAnswear)
    else newAnswears.push(newAnswear)

    setAnswears(newAnswears)
  }

  const goToNextStep = (newAnswear) => {
    handleAnswearsChange(newAnswear)

    if (!isLastStep) setStep((step) => step + 1)
    else submitAnswears()
  }

  const goToPrevStep = () => setStep((step) => step - 1)

  const submitAnswears = () => alert('Answears submitted!')

  useEffect(() => {
    showPreloader()
    if (questions[step]) {
      hidePreloader()
      setCurrentQuestion(questions[step])

      if (answears) {
        const selectedAnswearIndex = answears.findIndex(
          ({ id }) => id === questions[step].id
        )

        if (selectedAnswearIndex >= 0)
          setSelectedAnswear(parseInt(answears[selectedAnswearIndex].answear))
      }
    }
  }, [step, questions, answears, hidePreloader, showPreloader])

  const pageHeading = `Question №${step + 1}`
  const userName = Boolean(displayName) ? displayName : email
  const redirectToProfile = () => history.push(PAGES.USER_PROFILE.path)

  const isPrevButtonShown = step > 0
  const isLastStep = step + 1 === questions.length

  return (
    <>
      <Header
        pageHeading={pageHeading}
        userName={userName}
        onLogoutButtonClick={signOut}
        onUserNameClick={redirectToProfile}
        hasSignedUser
      />
      <Question
        onNextButtonClick={goToNextStep}
        onPrevButtonClick={goToPrevStep}
        isPrevButtonShown={isPrevButtonShown}
        isLastStep={isLastStep}
        selectedAnswear={selectedAnswear}
        {...currentQuestion}
      />
    </>
  )
}

export default withUser(withQuestions(HomePage))
