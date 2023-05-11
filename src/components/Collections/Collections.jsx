import { useEffect, useState } from 'react'
import useCollection from '../../hooks/useCollection'
import FolderCollection from '../FolderCollection/FolderCollection'
import AddCollection from '../AddCollection/AddCollection'

function Collections () {
  const { currentView } = useCollection()
  const [state, setState] = useState()
  const [reload, setReload] = useState(false)
  const currentPath = window.location.href.split('/').pop()
  const pathFull = window.location.href.split('/')
  const index = pathFull.indexOf('collections')
  const entryPath = pathFull.splice(index).join('/')

  useEffect(() => {
    const tmp = JSON.parse(window.localStorage.getItem('fileSystem'))
    setState(tmp || null)

    const handleBackButton = () => {
      console.log("El usuario ha presionado el botón 'atrás'")
      setReload(!reload)
    }

    window.addEventListener('popstate', handleBackButton)
    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [currentView, reload])

  return (
    <div className='grid gap-5 w-[22rem] mt-6'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <svg width='18px' height='18px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#ffffff'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <title /> <g id='Complete'> <g id='F-Chevron'> <polyline fill='none' id='Left' points='15.5 5 8.5 12 15.5 19' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' /> </g> </g> </g></svg>
          <h2 className='text-base font-bold'>{currentPath}</h2>
          <svg fill='#ffffff' width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z' /></g></svg>
        </div>

        <AddCollection
          currentPath={currentPath}
          entryPath={entryPath}
        />
      </div>

      <div className='flex flex-col gap-4 '>
        {
      state
        ? state.collections.map((attrs) => {
          const listId =
            currentPath === 'collections'
              ? state.collections[0].children
              : state.collections.find(c => c.path === entryPath).children

          if (listId.includes(attrs.id)) {
            return <FolderCollection key={attrs.id} {...attrs} entryPath={entryPath} />
          } else {
            return null
          }
        })
        : null
        }
      </div>

    </div>
  )
}

export default Collections
