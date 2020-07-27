import React, { useState, useEffect, FunctionComponent } from 'react'

import { useFirebase } from './context'

type Question = {
  id: string
  questionText?: string
  answears?: string[]
}

interface WithQuestionsComponentProps {
  questions: Question[]
  (...props: string[]): any
}

type WithQuestionsComponent<
  P = WithQuestionsComponentProps
> = FunctionComponent<P>

export default (
  Component: FunctionComponent<any>
): WithQuestionsComponent => props => {
  const [questions, setQuestions] = useState([] as Question[])
  const { firestore } = useFirebase()

  useEffect(() => {
    firestore
      .collection('questions')
      .get()
      .then(({ docs }) => {
        const questions = docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setQuestions(questions)
      })
  }, [firestore])

  return <Component {...props} questions={questions} />
}
