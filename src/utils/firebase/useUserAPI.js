import { useFirebase } from './context'

export default () => {
  const { auth } = useFirebase()

  return {
    signUp: (credentials, onError) => {
      const { email, password, name } = credentials

      return auth
        .createUserWithEmailAndPassword(email, password)
        .then(
          ({ user }) =>
            user.updateProfile({ displayName: name }).catch(onError),
          onError
        )
    },
    signIn: (credentials, onError) => {
      const { email, password } = credentials

      return auth.signInWithEmailAndPassword(email, password).catch(onError)
    },
    signOut: () =>
      auth.signOut().then(
        () => localStorage.clear(),
        (err) => console.error(err)
      ),
  }
}
