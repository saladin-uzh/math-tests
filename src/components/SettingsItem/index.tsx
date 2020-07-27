import React, { useState, ChangeEvent } from 'react'

import Button from '../Button'
import {
  SettingsItem,
  SettingCaption,
  SettingCurrentValue,
  SettingChangeForm,
  SettingInput,
} from './ui'

import { SettingsItemProps, SettingItem, ConfirmEvent } from './types'

export default ({
  caption,
  currentValue = '',
  changeButtonText = 'Change',
}: SettingsItemProps) => {
  const [isInputFieldShown, setIsInputFieldShown] = useState(false)
  const [setting, setSetting] = useState(currentValue as SettingItem)

  const showInputField = () => setIsInputFieldShown(true)
  const hideInputField = () => setIsInputFieldShown(false)

  const handleSettingChange = (event: ChangeEvent) => {
    const { nodeValue } = event.currentTarget

    setSetting(nodeValue || undefined)
  }

  const handleConfirm = (event: ConfirmEvent) => {
    event.preventDefault()
  }

  const hasCurrentValue = !isInputFieldShown && Boolean(currentValue)

  return (
    <SettingsItem>
      <SettingCaption>{caption}</SettingCaption>
      {isInputFieldShown && (
        <SettingChangeForm onSubmit={handleConfirm}>
          <SettingInput
            type="text"
            value={setting}
            onChange={handleSettingChange}
          />
          <Button type={Button.types.link} onClick={hideInputField}>
            Cancel
          </Button>
          <Button type={Button.types.submit}>Confirm</Button>
        </SettingChangeForm>
      )}
      {hasCurrentValue && (
        <SettingCurrentValue>{currentValue}</SettingCurrentValue>
      )}
      {!isInputFieldShown && (
        <Button type={Button.types.regular} onClick={showInputField}>
          {changeButtonText}
        </Button>
      )}
    </SettingsItem>
  )
}
