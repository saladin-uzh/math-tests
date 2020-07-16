import React from 'react'

import { useQuestions } from './hooks'

export default (Component) => () => {
  const questions = useQuestions()
  return <Component questions={questions} />
}
