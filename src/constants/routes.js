import { HomePage, AdminPage } from '../pages'

const PAGES = {
  HOME: {
    path: '/',
    component: HomePage,
    exact: true,
  },
  ADMIN: {
    path: '/admin',
    component: AdminPage,
  },
}

export default Object.keys(PAGES).map((page) => ({ ...PAGES[page], key: page }))
