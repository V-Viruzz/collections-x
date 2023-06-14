import React from 'react'

function Input ({ type, placeholder, id }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className='block w-full appearance-none rounded-lg  bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 border-solid border border-zinc-300 dark:border-none'
    />
  )
}

export default Input
