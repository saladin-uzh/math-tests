import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export default (): [number, Dispatch<SetStateAction<number>>] => {
  const getDefaultStep = (): number => {
    const storedStep = localStorage.getItem('STEP')
    return storedStep ? parseInt(storedStep) : 0
  }

  const [step, setStep] = useState(getDefaultStep())

  useEffect(() => {
    return localStorage.setItem('STEP', step.toString())
  })

  return [step, setStep]
}
