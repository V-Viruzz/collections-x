import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { useContext } from 'react'
import { auth } from '../../service/firebase'
import { useNavigate } from 'react-router-dom'
import { CollectionContext } from '../../context/collection'
import css from './LoginSocial.module.css'
import registerUser from '../../service/registerUser'
import googleLogo from '../../assets/icons8-google.svg'
import githubLogo from '../../assets/icons8-github.svg'

function LoginSocial () {
  const { setReload } = useContext(CollectionContext)

  const navigate = useNavigate()

  const handleClickGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      console.log('login google', credentials)
      registerUser(credentials)
      setReload(prev => !prev)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  const handleClickGitHub = async () => {
    const provider = new GithubAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      registerUser(credentials)
      console.log('login google', credentials)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={`${css.quickLogin}`}>
      <button
        className='bg-gray-100 hover:bg-gray-300 hover:text-black hover:border-gray-50 cursor-pointer px-4 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded'
        onClick={handleClickGoogle}
      >
        <img className='h-5' src={googleLogo} alt='' />
        <span>Google</span>
      </button>
      <button
        className='bg-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-gray-950 cursor-pointer px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'
        onClick={handleClickGitHub}
      >
        <img className='h-5' src={githubLogo} alt='' />
        <span>Github</span>
      </button>

    </div>
  )
}

export default LoginSocial
