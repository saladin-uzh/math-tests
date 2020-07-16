import { useContext, useState, useEffect } from 'react'

import { FirebaseContext } from './context'

export default () => {
  const [questionsArr, setQuestionsArr] = useState([])
  const { firestore } = useContext(FirebaseContext)

  useEffect(() => {
    firestore
      .collection('questions')
      .get()
      .then(({ docs }) => {
        const questions = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setQuestionsArr(questions)
      })
  }, [firestore])

  return questionsArr
}
