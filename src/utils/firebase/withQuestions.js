import React, { useContext, useState, useEffect } from 'react'

import { FirebaseContext } from './context'

export default (Component) => () => {
  const [questions, setQuestions] = useState([])
  const { firestore } = useContext(FirebaseContext)

  useEffect(() => {
    firestore
      .collection('questions')
      .get()
      .then(({ docs }) => {
        const questions = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setQuestions(questions)
      })
  }, [firestore])

  return <Component questions={questions} />
}
