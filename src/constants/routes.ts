import { HomePage, UserProfilePage, LoginPage, SignUpPage } from '../pages'
import { FunctionComponent } from 'react'

interface PageProps {
  path: string
  page: FunctionComponent<any>
  exact?: boolean
  isPrivate?: boolean
}

interface Pages {
  [pageName: string]: PageProps
}

export const PAGES: Pages = {
  HOME: {
    path: '/',
    page: HomePage,
    exact: true,
    isPrivate: true,
  },
  USER_PROFILE: {
    path: '/profile',
    page: UserProfilePage,
    isPrivate: true,
  },
  LOGIN: {
    path: '/login',
    page: LoginPage,
  },
  SIGNUP: {
    path: '/signup',
    page: SignUpPage,
  },
}

export default Object.keys(PAGES).map(page => ({ ...PAGES[page], key: page }))
