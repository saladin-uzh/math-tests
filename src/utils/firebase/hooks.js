import { useContext, useState, useEffect } from 'react'

import { FirebaseContext } from './context'

export const useQuestions = () => {
  const [questionsArr, setQuestionsArr] = useState([])
  const { firestore } = useContext(FirebaseContext)

  useEffect(() => {
    firestore
      .collection('questions')
      .get()
      .then(({ docs }) => {
        const questions = docs.map((doc) => doc.data())
        setQuestionsArr(questions)
      })
  }, [firestore])

  return questionsArr
}
