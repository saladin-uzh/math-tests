import { HomePage, AdminPage, LoginPage, SignUpPage } from '../pages'

export const PAGES = {
  HOME: {
    path: '/',
    component: HomePage,
    exact: true,
    isPrivate: true,
  },
  ADMIN: {
    path: '/admin',
    component: AdminPage,
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
