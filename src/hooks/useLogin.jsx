import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../service/firebase'

function useLogin () {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log('user is already logged in', user)
        setIsLogin(user.emailVerified)
        setCurrentUser(user)
      } else {
        console.log('user is not logged in')
        setIsLogin(null)
      }
    })
  }, [isLogin])

  return { isLogin, setIsLogin, currentUser }
}

export default useLogin
