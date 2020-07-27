import { useFirebase } from './context'

type Credentials = {
  email: string
  password: string
  name?: string
}

type OnErrorCallbackArgs = {
  message: string
}

type OnErrorCallback = ({ message }: OnErrorCallbackArgs) => void

interface UserAPI {
  signUp: (credentials: Credentials, onError: OnErrorCallback) => void
  signIn: (credentials: Credentials, onError: OnErrorCallback) => void
  signOut: (onError: OnErrorCallback) => void
}

export default (): UserAPI => {
  const { auth } = useFirebase()

  return {
    signUp: (credentials, onError) => {
      const { email, password, name } = credentials

      return auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) user.updateProfile({ displayName: name }).catch(onError)
        }, onError)
    },

    signIn: (credentials, onError) => {
      const { email, password } = credentials

      return auth.signInWithEmailAndPassword(email, password).catch(onError)
    },

    signOut: (onError) =>
      auth.signOut().then(() => localStorage.clear(), onError),
  }
}
