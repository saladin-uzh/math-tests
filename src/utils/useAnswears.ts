import { useState, useEffect } from 'react'

type Answear = {
  id: string
  answear: string
}

const answearsToString = (answears: Answear[]): string => {
  if (answears && answears.length)
    return answears.map(({ id, answear }) => `${id}=${answear}`).join()
  else return ''
}

const answearsToObject = (answears: string): Answear[] => {
  if (answears && answears.length)
    return answears.split(',').map((answear) => {
      const chunks = answear.split('=')
      return {
        id: chunks[0],
        answear: chunks[1],
      }
    })
  else return []
}

export default (): [Answear[], (answears: Answear[]) => void] => {
  const getDefaultAnswears = (): Answear[] => {
    const storedAnswears = localStorage.getItem('ANSWEARS')
    if (storedAnswears) return answearsToObject(storedAnswears)
    else return []
  }

  const [answears, setAnswears] = useState(getDefaultAnswears())

  useEffect(() => {
    localStorage.setItem('ANSWEARS', answearsToString(answears))
  })

  return [answears, setAnswears]
}
