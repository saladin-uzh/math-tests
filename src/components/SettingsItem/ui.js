import styled from 'styled-components'
import { spacings, colors, media } from '../../constants'

export const SettingsItem = styled.div`
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: ${spacings.medium};
  margin: ${spacings.small} 0;
  border-bottom: 1px solid ${colors.grey0};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${media.small`
    margin: 0 ${spacings.small};

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`

export const SettingCaption = styled.h4`
  flex-basis: 100%;
  margin: 0 0 ${spacings.small} 0;
`

export const SettingCurrentValue = styled.span`
  font-size: 15px;
  margin: 0 ${spacings.small} ${spacings.small} 0;
`

export const SettingChangeForm = styled.form`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const SettingInput = styled.input`
  flex-basis: 100%;
  margin: 0 0 ${spacings.small};
`
