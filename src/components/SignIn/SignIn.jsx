import Card from '../Card/Card'
import Form from '../Form/Form'
import reactLogo from '../../assets/react.svg'
import LoginSocial from '../LoginSocial/LoginSocial'

function SignIn () {
  return (
    <Card>
      <div className=' grid grid-cols-auto grid-rows-layout'>
        <div className='flex justify-center flex-col items-center'>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
          <h2 className='text-3xl'>Iniciar sesion</h2>
        </div>
        <LoginSocial />
        <Form />
      </div>
    </Card>
  )
}

export default SignIn
