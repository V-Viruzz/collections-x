import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NotificationError from './components/NotificationError/NotificationError'
import Card from './components/Card/Card'
import Home from './components/Home/Home'
import VerificationCard from './components/VerificationCard/VerificationCard'
import './App.css'

function Register () {
  const navigate = useNavigate()

  return (
    <Card>
      <h2>Te registraste con exito</h2>
      <button onClick={() => navigate('/')}>Ir al home</button>
    </Card>
  )
}

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/register-completado' element={<Register />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/verification' element={<VerificationCard />} />
      </Routes>
      <NotificationError />
    </>
  )
}

export default App

// Agregar un collecion de paginas en el main
