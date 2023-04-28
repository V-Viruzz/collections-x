import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

function useLogin (auth) {
  const [isLogin, setIsLogin] = useState(false)
  // const [isVerification, setIsVerification] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user is already logged in', user)
        setIsLogin(auth.currentUser.emailVerified)
      } else {
        console.log('user is not logged in')
      }
    })
  }, [isLogin])

  return { isLogin, setIsLogin }
}

export default useLogin
