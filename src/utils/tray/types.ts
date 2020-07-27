type INFO = 'info'
type ERROR = 'error'

export interface TooltipData {
  type: INFO | ERROR
  text: string
}

export interface TrayContext {
  tray: TooltipData[]
  addItemToTray: (item: TooltipData) => void
  removeItemFromTray: () => void
}
