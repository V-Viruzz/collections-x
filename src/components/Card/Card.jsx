import React from 'react'
import css from './Card.module.css'
import reactLogo from '../../assets/react.svg'
import googleLogo from '../../assets/icons8-google.svg'
import githubLogo from '../../assets/icons8-github.svg'

function Card () {
  return (
    <div className={`${css.conteiner} p-10 rounded-3xl bg-stone-900 shadow-2xl`}>
      <div className='flex justify-center flex-col items-center'>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <h2 className='text-3xl'>Register</h2>
      </div>
      <div className={`${css.quickLogin}`}>
        <a class='bg-gray-100 hover:bg-gray-300 hover:text-black cursor-pointer px-4 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded'>
          <img className='h-5' src={googleLogo} alt='' />
          <span>Google</span>
        </a>
        <a class='bg-zinc-800 hover:bg-zinc-950 hover:text-white cursor-pointer px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
          <img className='h-5' src={githubLogo} alt='' />
          <span>Github</span>
        </a>

      </div>
      <div>
        <form className={`${css.formContainer}`}>

          <input
            type='text'
            placeholder='Name'
            class='block w-full appearance-none rounded-lg  bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          />
          <input
            type='text'
            placeholder='Email'
            class='block w-full appearance-none rounded-lg  bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
          />
          <div className='flex justify-center gap-3 items-center'>
            <input className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded' type='checkbox' />
            <p className='text-sm'>aceptas los termino y condiciones</p>
          </div>

          <button className=' bg-slate-800 '>Next</button>

        </form>
      </div>
    </div>
  )
}

export default Card
