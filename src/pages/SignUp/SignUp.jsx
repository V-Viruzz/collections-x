import reactLogo from '../../assets/react.svg'
import FormRegister from '../../components/FormRegister/FormRegister'
import LoginSocial from '../../components/LoginSocial/LoginSocial'
import Card from '../../components/Card/Card'
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
        <FormRegister />
      </div>
    </Card>
  )
}

export default SignUp
