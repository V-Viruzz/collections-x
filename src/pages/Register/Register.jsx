import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'

function Register () {
  const navigate = useNavigate()

  return (
    <Card>
      <h2>Te registraste con exito</h2>
      <button onClick={() => navigate('/')}>Ir al home</button>
    </Card>
  )
}

export default Register
