import { ChangeEvent } from 'react'

export interface Answear {
  id: string
  answear: string
}

export interface QuestionProps<A = Answear> {
  id: string
  questionText?: string
  answears?: A[]
  selectedAnswear: number | null
  onNextButtonClick: (answear: Answear) => void
  onPrevButtonClick: () => void
  isPrevButtonShown: boolean
  isLastStep: boolean
}

interface AnswearSelectEventTarget {
  value: string
}
export type AnswearSelectEvent<T = AnswearSelectEventTarget> = ChangeEvent<T>
