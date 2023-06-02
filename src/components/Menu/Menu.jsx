import { useState, useContext } from 'react'
import { CollectionContext } from '../../context/collection'
import { auth } from '../../service/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import uploadCollection from '../../service/uploadCollection'

function Menu ({ setData }) {
  const [showMenu, setShowMenu] = useState(false)
  const { setReload } = useContext(CollectionContext)
  const navigate = useNavigate()

  const handleClickMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleClickSignOut = async () => {
    await signOut(auth)
    console.log('user signed out')
    window.localStorage.clear()
    navigate('/')
  }

  const deleteAll = () => {
    const fileSystem = JSON.parse(window.localStorage.getItem('fileSystem'))
    fileSystem.collections = [{
      id: 'collections',
      type: '__folder__',
      name: 'collections',
      path: 'collections',
      parentPath: null,
      parentID: null,
      children: []
    }]
    window.localStorage.setItem('fileSystem', JSON.stringify(fileSystem))
    console.log('deleteAll')

    uploadCollection(fileSystem)
    setData(fileSystem)
    setReload(prev => !prev)
  }

  return (
    <>
      <button
        onClick={handleClickMenu}
        role='menu'
        className='flex items-center flex-shrink-0'
      >
        <svg width='28px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g id='SVGRepo_bgCarrier' strokeWidth='0' />
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
          <g id='SVGRepo_iconCarrier'>
            <path d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z' className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z' className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z' className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </g>
        </svg>
      </button>

      <ul
        className={`${showMenu ? '' : 'hidden'} 
         right-0 top-14 h-auto w-40 absolute bg-zinc-900
         border-solid border border-zinc-700 rounded-lg
         shadow-xl p-3 font-sans text-sm font-normal focus:outline-none z-10
         `}
      >
        <li
          role='menuitem'
          onClick={deleteAll}
          className='block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-zinc-800 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:text-red-600'
        >
          Borrar todo
        </li>
        <li
          role='menuitem'
          onClick={handleClickSignOut}
          className='block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-zinc-800 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 '
        >
          Cerrar sesion
        </li>

      </ul>
    </>
  )
}

export default Menu
