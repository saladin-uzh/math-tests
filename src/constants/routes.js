import { HomePage, AdminPage, LoginPage } from '../pages'

const PAGES = {
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
}

export default Object.keys(PAGES).map((page) => ({ ...PAGES[page], key: page }))
