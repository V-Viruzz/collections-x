import { useContext } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../service/firebase'
import { ErrorContext } from '../../context/error'
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import css from './Form.module.css'

function FormLogin () {
  const { handleError } = useContext(ErrorContext)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target['signup-email'].value
    const password = event.target['signup-password'].value

    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      console.log(result)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        handleError('Wrong password error')
      } else if (error.code === 'auth/invalid-email') {
        handleError('User not found error')
      } else {
        handleError(`${error.message}, error'`)
      }
    }
  }

  return (
    <div>
      <form className={`${css.formContainer}`} onSubmit={handleSubmit}>
        <p className='text-sm'>¿Aun no te <a>registraste</a>?</p>

        <Input type='text' placeholder='Email' id='signup-email' />
        <Input type='password' placeholder='Password' id='signup-password' />

        <button className=' bg-slate-800 '>Continuar</button>

      </form>
    </div>
  )
}

export default FormLogin
