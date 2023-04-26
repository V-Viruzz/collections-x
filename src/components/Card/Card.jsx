import { signOut } from 'firebase/auth'
import { auth } from '../../service/firebase'
import { useNavigate } from 'react-router-dom'

function Card () {
  const navigate = useNavigate()
  const handleClick = async () => {
    await signOut(auth)
    navigate('/')
    console.log('user signed out')
  }
  return (
    <div className='border-solid border-2 border-gray-50 h-72 flex justify-center flex-col items-center gap-6 rounded-xl mt-7'>
      <div>cerrar sesion</div>
      <button className='bg-slate-600 ' onClick={handleClick}>logout</button>
    </div>
  )
}

export default Card
