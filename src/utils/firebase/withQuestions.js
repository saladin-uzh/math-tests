import React, { useState, useEffect } from 'react'

import { useFirebase } from './context'

export default (Component) => (props) => {
  const [questions, setQuestions] = useState([])
  const { firestore } = useFirebase()

  useEffect(() => {
    firestore
      .collection('questions')
      .get()
      .then(({ docs }) => {
        const questions = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setQuestions(questions)
      })
  }, [firestore])

  return <Component questions={questions} {...props} />
}
