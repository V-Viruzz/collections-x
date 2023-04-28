import reactLogo from '../../assets/react.svg'
import Form from '../Form/Form'
import LoginSocial from '../LoginSocial/LoginSocial'
import Card from '../Card/Card'
import '../../service/firebase.js'

function SignUp () {
  return (
    <Card>
      <div className=' grid grid-cols-auto grid-rows-layout'>
        <div className='flex justify-center flex-col items-center'>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
          <h2 className='text-3xl'>Registrarse</h2>
        </div>
        <LoginSocial />
        <Form />
      </div>
    </Card>
  )
}

export default SignUp
