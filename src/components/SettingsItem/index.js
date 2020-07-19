import React, { useState } from 'react'

import Button from '../Button'
import {
  SettingsItem,
  SettingCaption,
  SettingCurrentValue,
  SettingChangeForm,
  SettingInput,
} from './ui'

export default ({
  caption,
  currentValue = '',
  changeButtonText = 'Change',
}) => {
  const [isInputFieldShown, setIsInputFieldShown] = useState(false)
  const [setting, setSetting] = useState(currentValue)

  const showInputField = () => setIsInputFieldShown(true)
  const hideInputField = () => setIsInputFieldShown(false)

  const handleSettingChange = (event) => {
    setSetting(event.target.value)
  }

  const handleConfirm = (event) => {
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
          <Button type={Button.types.LINK} onClick={hideInputField}>
            Cancel
          </Button>
          <Button type={Button.types.SUBMIT}>Confirm</Button>
        </SettingChangeForm>
      )}
      {hasCurrentValue && (
        <SettingCurrentValue>{currentValue}</SettingCurrentValue>
      )}
      {!isInputFieldShown && (
        <Button onClick={showInputField}>{changeButtonText}</Button>
      )}
    </SettingsItem>
  )
}
