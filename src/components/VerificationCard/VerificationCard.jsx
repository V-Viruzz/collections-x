import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'

function VerificationCard () {
  const navigate = useNavigate()

  return (
    <Card>
      <h2>Verifique su correo electronico</h2>
      <button onClick={() => navigate('/')}>Ir al home</button>
    </Card>
  )
}

export default VerificationCard
