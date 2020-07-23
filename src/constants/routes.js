import { HomePage, UserProfilePage, LoginPage, SignUpPage } from '../pages'

export const PAGES = {
  HOME: {
    path: '/',
    component: HomePage,
    exact: true,
    isPrivate: true,
  },
  USER_PROFILE: {
    path: '/profile',
    component: UserProfilePage,
    isPrivate: true,
  },
  LOGIN: {
    path: '/login',
    component: LoginPage,
  },
  SIGNUP: {
    path: '/signup',
    component: SignUpPage,
  },
}

export default Object.keys(PAGES).map((page) => ({ ...PAGES[page], key: page }))
