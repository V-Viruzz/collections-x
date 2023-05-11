import UserMenu from '../../components/UserMenu/UserMenu'
import { CollectionProvider } from '../../context/collection'
import { Outlet } from 'react-router-dom'

function Home () {
  return (
    <div className='flex flex-col min-h-screen w-screen'>
      {/* Header */}
      <header className='bg-gray-800'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex items-center flex-shrink-0'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
              alt='Workflow'
            />
          </div>
          <div className='block'>
            <div className='flex items-center justify-end'>
              <div className='md:block'>
                <UserMenu />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main className='flex items-center justify-center'>
        <CollectionProvider>
          <Outlet />
        </CollectionProvider>
      </main>

      {/* Footer */}

    </div>
  )
}

export default Home
