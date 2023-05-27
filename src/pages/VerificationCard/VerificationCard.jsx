import { useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import Card from '../../components/Card/Card'

function VerificationCard () {
  const navigate = useNavigate()
  const { isLogin, currentUser } = useLogin()

  console.log('user', currentUser)
  console.log('verificado', isLogin)

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Card>
      <h2 className='text-xl'>Verifique su correo electronico</h2>
      <div className='my-10'>
        Te enviamos un correo al <div className='text-indigo-400 font-bold'>{currentUser.email}</div>
      </div>
      <button className='w-32 mx-auto' onClick={handleClick}>Ir al home {isLogin}</button>
    </Card>
  )
}

export default VerificationCard
