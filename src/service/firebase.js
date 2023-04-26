import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXvHIK0JOP0pXZmORKIKBNte3ZnWufgNQ',
  authDomain: 'test-login-2c63e.firebaseapp.com',
  projectId: 'test-login-2c63e',
  storageBucket: 'test-login-2c63e.appspot.com',
  messagingSenderId: '1072209292424',
  appId: '1:1072209292424:web:36cd1a1ce5c83ca078833d'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
