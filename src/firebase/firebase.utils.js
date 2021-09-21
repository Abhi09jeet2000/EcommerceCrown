import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCh5JBxs5uffSjvy3xAvzSN7XJK_Z6J6og',
  authDomain: 'crown-db-806b6.firebaseapp.com',
  projectId: 'crown-db-806b6',
  storageBucket: 'crown-db-806b6.appspot.com',
  messagingSenderId: '320306002245',
  appId: '1:320306002245:web:e7c22c5181a4cc7761e62c',
  measurementId: 'G-GR8TJ4G3XT',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
