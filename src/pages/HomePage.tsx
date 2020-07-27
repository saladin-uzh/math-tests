import React, { useState, useEffect, FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'

import { useAnswears, useStep, usePreloader, useTray } from '../utils'
import { withQuestions, withUser, useUserAPI } from '../utils/firebase'

import { PAGES } from '../constants'

import { Question, Header, Tooltip } from '../components'

interface User {
  email: string
  displayName?: string
}

interface Answear {
  id: string
  answear: string
}

interface Question {
  id: string
  questionText?: string
  answears?: Answear[]
}

interface HomePageProps {
  questions: Question[]
  user: User
  (...props: string[]): any
}

interface HomePage<P = HomePageProps> extends FunctionComponent<P> {}

const HomePage: HomePage = ({ questions, user: { email, displayName } }) => {
  const [currentQuestion, setCurrentQuestion] = useState({} as Question)
  const [selectedAnswear, setSelectedAnswear] = useState(-1)
  const [answears, setAnswears] = useAnswears()
  const [step, setStep] = useStep()
  const { showPreloader, hidePreloader } = usePreloader()
  const { signOut } = useUserAPI()
  const { addItemToTray } = useTray()
  const history = useHistory()

  const handleAnswearsChange = (newAnswear: Answear) => {
    const newAnswears = answears || []

    const targetIndex = newAnswears.findIndex(
      ({ id }) => id === questions[step].id
    )

    if (targetIndex >= 0) newAnswears.splice(targetIndex, 1, newAnswear)
    else newAnswears.push(newAnswear)

    setAnswears(newAnswears)
  }

  const handleSignOutButtonClick = () =>
    signOut(({ message }) =>
      addItemToTray({
        type: Tooltip.types.error,
        text: message,
      })
    )

  const goToNextStep = (newAnswear: Answear) => {
    handleAnswearsChange(newAnswear)

    if (!isLastStep) setStep(step => step + 1)
    else submitAnswears()
  }

  const goToPrevStep = () => setStep(step => step - 1)

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
        else setSelectedAnswear(-1)
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
        onLogoutButtonClick={handleSignOutButtonClick}
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
