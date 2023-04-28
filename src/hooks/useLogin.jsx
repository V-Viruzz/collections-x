import { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

function useLogin (auth) {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user is already logged in')
        setIsLogin(true)
      } else {
        console.log('user is not logged in')
        setIsLogin(false)
      }
    })
  }, [])

  return { isLogin, setIsLogin }
}

export default useLogin
