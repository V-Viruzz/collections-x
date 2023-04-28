import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

export async function loginCheck () {
  const rest = onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('user is already logged in')
      return true
    } else {
      console.log('user is not logged in')
      return false
    }
  })
  const result = await rest()

  return result
}
