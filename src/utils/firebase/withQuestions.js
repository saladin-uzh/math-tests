import React from 'react'

import useQuestions from './useQuestions'

export default (Component) => () => {
  const questions = useQuestions()
  return <Component questions={questions} />
}
