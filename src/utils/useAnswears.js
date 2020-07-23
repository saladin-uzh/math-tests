import { useState, useEffect } from 'react'

const answearsToString = (answears) => {
  if (answears && answears.length)
    return answears.map(({ id, answear }) => `${id}=${answear}`).join()
  else return null
}

const answearsToObject = (answears) => {
  if (answears && answears.length)
    return answears.split(',').map((answear) => {
      const chunks = answear.split('=')
      return {
        id: chunks[0],
        answear: chunks[1],
      }
    })
  else return null
}

export default () => {
  const getDefaultAnswears = () => {
    const storedAnswears = localStorage.getItem('ANSWEARS')
    if (storedAnswears) return answearsToObject(storedAnswears)
    else return null
  }

  const [answears, setAnswears] = useState(getDefaultAnswears())

  useEffect(() => {
    localStorage.setItem('ANSWEARS', answearsToString(answears))
  })

  return [answears, setAnswears]
}
