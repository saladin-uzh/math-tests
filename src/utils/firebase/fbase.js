import * as fb from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MES_ID,
}

export default class Firebase {
  constructor(notEmptyInst = true) {
    if (notEmptyInst) this.doInit()
  }

  doInit() {
    let app = null

    if (!fb.apps.length) {
      try {
        app = fb.initializeApp(firebaseConfig)
      } catch (e) {
        console.group('Firebase APP initialization')
        console.log(`Initialization error: ${e}`)
      } finally {
        console.log(`${fb.apps.length} Firebase APPs initialized`)
        console.log(`Current APP name: "${fb.app.name}"`)
        console.groupEnd()
      }
    } else {
      app = fb.apps[0]
      console.log('Duplicated Firebase APP initialization avoided!')
    }

    this.firebaseInst = app
  }

  _firebaseInst = null
  static nullAppInst = null

  get firebaseInst() {
    return this._firebaseInst
  }

  set firebaseInst(app) {
    this._firebaseInst = app
  }
}
