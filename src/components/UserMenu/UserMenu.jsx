import useLogin from '../../hooks/useLogin'
import { Link } from 'react-router-dom'
import { auth } from '../../service/firebase'
import { signOut } from 'firebase/auth'

function UserMenu () {
  const { isLogin } = useLogin(auth)
  console.log(isLogin)

  const handleClick = async () => {
    await signOut(auth)
    console.log('user signed out')
  }

  if (!isLogin) {
    return (
      <>
        <Link
          to='register'
          className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        >
          Sign up
        </Link>

        <Link
          to='login'
          className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        >
          Sign in
        </Link>
      </>
    )
  } else if (isLogin) {
    return (
      <Link
        to='/'
        onClick={handleClick}
        className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      >
        Logout
      </Link>

    )
  }
}

export default UserMenu
