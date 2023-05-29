import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import { Routes, Route } from 'react-router-dom'
import NotificationError from './components/NotificationError/NotificationError'
import Collections from './components/Collections/Collections'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import VerificationCard from './pages/VerificationCard/VerificationCard'
import useLogin from './hooks/useLogin'
import './App.css'

function IsCollection () {
  const { currentUser } = useLogin()
  return (
    <>
      {currentUser ? <Collections /> : null}
    </>
  )
}

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/collections' element={<IsCollection />}
        />
        <Route path='/collections/*' element={<IsCollection />} />
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
