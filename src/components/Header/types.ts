interface OnErrorCallbackArgs {
  message: string
}
type OnErrorCallback<A = OnErrorCallbackArgs> = (args: A) => void
type OnLogoutButtonClick<E = OnErrorCallback> = (onError: E) => void
export interface HeaderProps {
  pageHeading: string
  userName?: string
  hasSignedUser?: boolean
  onLogoutButtonClick?: OnLogoutButtonClick
  onUserNameClick?: () => void
}

export interface VisibilityControledProps {
  isVisible: boolean
}
