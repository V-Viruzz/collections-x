import { useState, useContext } from 'react'
import { CollectionContext } from '../../context/collection'
import EditMenu from '../EditMenu/EditMenu'

function LinkCard ({ name, link, date, deleteItem, editItem, parentID, id, type, isDragging }) {
  const { setReload } = useContext(CollectionContext)
  const [inputHidden, setInputHidden] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const ishttps = link.includes('https://' || 'http://')
  const newlink = !ishttps ? 'https://' + link : link
  const textLink = link
    .replace('https://', '')
    .replace('http://', '')
    .split('/')[0]

  // const editeItemClick = () => {
  //   console.log('edite item')
  //   setInputHidden(false)
  //   setShowMenu(false)
  // }

  const handleMenuClick = (event) => {
    event.preventDefault()
    setShowMenu(!showMenu)
  }

  const deleteItemClick = (event) => {
    deleteItem({ id, parentID })
    setReload(prev => !prev)
    event.preventDefault()
  }

  return (

    <a
      href={newlink}
      target='_blank'
      rel='noreferrer'
      className='text-inherit hover:text-inherit'
    >
      <div className={`${isDragging ? 'bg-black' : ''} flex w-full h-32 rounded-2xl z-10`}>

        <div className='flex flex-col justify-around items-center h-auto w-full rounded-l-2xl text-gray-50 bg-black bg-opacity-20'>
          <div className='px-5 flex w-full justify-between '>
            <h2 className='text-sm text-start'>{name}</h2>
          </div>

          <div />
          <div className='px-5 flex w-full justify-between '>
            <p className='text-[0.6rem] text-zinc-400'>{textLink}</p>
            <p className='text-[0.6rem]'>{date}</p>
          </div>
        </div>

        <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl text-white  bg-cyan-950 relative'>
          <svg width='48px' height='48px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth={0} />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path fillRule='evenodd' clipRule='evenodd' d='M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z' fill='#ffffff' />
            </g>
          </svg>

          <button
            onClick={handleMenuClick}
            className='absolute top-2 right-2 z-50'
          >
            <svg width='18px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' transform='rotate(90)'>
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
            // onMouseOver={() => setIsOver(true)}
            // onMouseOut={() => setIsOver(false)}
            className={`${showMenu ? '' : 'hidden'} 
              right-0 top-7 h-auto w-40 absolute bg-zinc-900
              border-solid border border-zinc-700 rounded-lg
              shadow-xl p-3 font-sans text-sm font-normal focus:outline-none
            `}
          >
            <li
              role='menuitem'
              onClick={deleteItemClick}
              className='block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-zinc-800 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:text-red-600'
            >
              Eliminar
            </li>
            {/* <li
              role='menuitem'
              onClick={editeItemClick}
              className='block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-zinc-800 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 '
            >
              Editar
            </li> */}

          </ul>
        </div>

      </div>

      <EditMenu
        id={id}
        name={name}
        link={link}
        type={type}
        inputHidden={inputHidden}
        setInputHidden={setInputHidden}
        editItem={editItem}
      />
    </a>

  )
}

export default LinkCard
