import { MouseEvent, FormEvent } from 'react'

export interface SettingsItemProps {
  caption: string
  currentValue?: string
  changeButtonText?: string
}

export type SettingItem = string | undefined
export type ConfirmEvent = MouseEvent | FormEvent
