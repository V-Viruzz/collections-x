import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

export async function loginCheck () {
  let isLogin
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('user is already logged in')
      isLogin = true
    } else {
      console.log('user is not logged in')
      isLogin = false
    }
  })

  console.log(isLogin)
  return isLogin
}
