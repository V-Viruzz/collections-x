import { useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
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
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log(result)
      navigate('/register-completado')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        handleError('Email already in use')
      } else if (error.code === 'auth/invalid-email') {
        handleError('Invalid email, error')
      } else if (error.code === 'auth/weak-password') {
        handleError('Password is too weak')
      } else if (error.code) {
        handleError('Something went wrong')
      }
    }
  }

  return (
    <div>
      <form className={`${css.formContainer}`} onSubmit={handleSubmit}>
        <p className='text-sm'>¿Ya tienes una cuenta? <a>Iniciar sesión</a> </p>

        <Input type='text' placeholder='Email' id='signup-email' />
        <Input type='password' placeholder='Password' id='signup-password' />

        <div className='flex justify-center gap-3 items-center'>
          <input className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded' type='checkbox' />
          <p className='text-sm'>aceptas los termino y condiciones</p>
        </div>

        <button className=' bg-slate-800 '>Continuar</button>

      </form>
    </div>
  )
}

export default FormLogin
