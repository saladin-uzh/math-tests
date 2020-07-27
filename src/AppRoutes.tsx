import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuthState } from './utils/firebase'

import { routes } from './constants'
export default () => {
  const isAuthentificated = useAuthState()

  return (
    <>
      {routes.map(({ isPrivate, page: Page, ...routeProps }) => (
        <Route
          {...routeProps}
          render={pageProps =>
            isPrivate ? (
              isAuthentificated ? (
                <Page {...pageProps} />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: location },
                  }}
                />
              )
            ) : !isAuthentificated ? (
              <Page {...pageProps} />
            ) : (
              <Redirect
                to={
                  pageProps.location.state
                    ? pageProps.location.state.from
                    : { pathname: '/' }
                }
              />
            )
          }
        />
      ))}
    </>
  )
}
