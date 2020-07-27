import { FunctionComponent } from 'react'
import { colors } from '../../constants'

type ERROR = 'error'
type INFO = 'info'

export const types = {
  error: 'error' as ERROR,
  info: 'info' as INFO,
}

export interface TooltipContainerProps {
  bgColor: string
  textColor: string
}

interface TypesConfigFormat {
  [type: string]: TooltipContainerProps
}

export const typesConfig: TypesConfigFormat = {
  [types.error]: {
    bgColor: colors.red,
    textColor: colors.white,
  },
  [types.info]: {
    bgColor: colors.yellow,
    textColor: colors.grey1,
  },
}

interface TooltipProps {
  type: ERROR | INFO
}

export interface TooltipInterface<P = TooltipProps>
  extends FunctionComponent<P> {
  types: typeof types
}
