import { useState, useEffect } from 'react'

export default () => {
  const getDefaultStep = () => localStorage.getItem('STEP') || 0

  const [step, setStep] = useState(getDefaultStep())

  useEffect(() => {
    return localStorage.setItem('STEP', step)
  })

  return [step, setStep]
}
