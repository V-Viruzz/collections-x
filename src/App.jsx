import SignUp from './components/SignUp/SignUp'
import { Routes, Route } from 'react-router-dom'
import NotificationError from './components/NotificationError/NotificationError'
import Card from './components/Card/Card'
import './App.css'

function Register () {
  return (
    <>
      <h2>Te registraste con exito</h2>
      <Card />
    </>
  )
}

function App () {
  return (
    <>
      <div className='conteiner-app p-10 rounded-3xl bg-stone-900 shadow-2xl w-full sm:w-[26rem]'>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/register' element={<Register />} />
        </Routes>

        <NotificationError />
      </div>
    </>
  )
}

export default App
