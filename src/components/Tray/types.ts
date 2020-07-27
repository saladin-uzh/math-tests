import { ReactNode } from 'react'

type ERROR = 'error'
type INFO = 'info'

export interface TooltipProps {
  type: ERROR | INFO
  text: string
}
