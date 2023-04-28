
import UserMenu from '../UserMenu/UserMenu'

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
      <main className='grow flex items-center'>
        <div className='w-76 mx-auto'>
          <div className='w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto'>
            <div className='flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black' id='headerTerminal'>
              <div className='flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3' id='closebtn' />
              <div className='ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3' id='minbtn' />
              <div className='ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3' id='maxbtn' />
              <div className='mx-auto pr-16' id='terminaltitle'>
                <p className='text-center text-sm'>Terminal</p>
              </div>

            </div>
            <div className='pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black' id='console'>
              <p className='pb-1'>Last login: Wed Sep 25 09:11:04 on ttys002</p>
              <p className='pb-1'>Laraben:Devprojects laraben$</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-800'>
        <div className='max-w-7xl h-12 mx-auto px-4 sm:px-6 lg:px-8 grid items-center'>
          <p className='opacity-50'>by Viruzz github.com/Viruzzz0</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
