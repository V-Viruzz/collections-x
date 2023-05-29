import UserMenu from '../../components/UserMenu/UserMenu'
import { Link } from 'react-router-dom'
// import useLogin from '../../hooks/useLogin'

function Home () {
  // const { isLogin } = useLogin()

  return (
    <div className='grid grid-cols-1  justify-between min-h-screen w-screen'>
      {/* Header */}
      <header className='h-min'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-3 py-3 sm:px-6 lg:px-8'>
          <div className='flex items-center flex-shrink-0 gap-3'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
              alt='Workflow'
            />
            <h2 className='text-sm font-bold'>Collections X</h2>
          </div>
          <div className='block'>
            <div className='flex items-center justify-end'>
              <div className='md:block'>
                <Link
                  to='/register'
                  className='text-white text-sm'
                >Log in
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main className='flex items-center justify-center h-full'>

        <div className='h-full flex flex-col gap-10'>
          <h1 className='text-2xl font-bold text-center w-60'>Colecciona todos tus links</h1>
          <div className='flex justify-center'>
            <Link
              className='w-40 h-14 bg-blue-700 rounded-lg flex items-center justify-center gap-2'
              to='/collections'
            >
              <span className='font-bold text-white text-sm'>Get started</span>
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}

    </div>
  )
}

export default Home
