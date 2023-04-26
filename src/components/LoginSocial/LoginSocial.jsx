import React from 'react'
import css from './LoginSocial.module.css'
import googleLogo from '../../assets/icons8-google.svg'
import githubLogo from '../../assets/icons8-github.svg'

function LoginSocial () {
  return (
    <div className={`${css.quickLogin}`}>
      <a className='bg-gray-100 hover:bg-gray-300 hover:text-black cursor-pointer px-4 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded'>
        <img className='h-5' src={googleLogo} alt='' />
        <span>Google</span>
      </a>
      <a className='bg-zinc-800 hover:bg-zinc-950 hover:text-white cursor-pointer px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
        <img className='h-5' src={githubLogo} alt='' />
        <span>Github</span>
      </a>

    </div>
  )
}

export default LoginSocial
