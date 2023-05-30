import Menu from '../../components/Menu/Menu'

function HeaderCollection () {
  return (
    <header>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8'>
        <div className='flex items-center flex-shrink-0'>
          <img
            className='h-8 rounded-full'
            src='https://th.bing.com/th/id/R.71138be7873b7220a3033fe53a77e411?rik=YpmvabLjSJyvKg&riu=http%3a%2f%2fmybookcave.com%2fapp%2fthemes%2fmybookcave%2fassets%2fimg%2fdefault-profile.png&ehk=tFRLZyr6mE8vFzpK4mK57dOtLLH0so9hugJmq8SoCUE%3d&risl=&pid=ImgRaw&r=0'
            alt='Workflow'
          />
        </div>
        <div className='flex items-center flex-shrink-0'>
          <img
            className='h-9'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
            alt='Workflow'
          />
        </div>
        <Menu />
      </nav>
    </header>
  )
}

export default HeaderCollection
