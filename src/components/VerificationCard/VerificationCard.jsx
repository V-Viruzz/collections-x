import { useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import Card from '../Card/Card'

function VerificationCard () {
  const navigate = useNavigate()
  const { isLogin, currentUser } = useLogin()

  console.log('user', currentUser)

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Card>
      <h2 className='text-xl'>Verifique su correo electronico</h2>
      <p className='my-10'>
        Te enviamos un correo al <div className='text-indigo-400 font-bold'>{currentUser.email}</div>
      </p>
      <button className='w-32 mx-auto' onClick={handleClick}>Ir al home {isLogin}</button>
    </Card>
  )
}

export default VerificationCard
