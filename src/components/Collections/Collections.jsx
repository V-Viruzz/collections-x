import { useEffect, useState, useRef } from 'react'
import useCollection from '../../hooks/useCollection'
import FolderCollection from '../FolderCollection/FolderCollection'
import md5 from 'md5'

function Collections () {
  const { currentView, addFolder } = useCollection()
  const [state, setState] = useState()
  const [inputHidden, setInputHidden] = useState(true)
  const inputRef = useRef(null)
  const location = window.location.href.split('/').pop()
  const pathFull = window.location.href.split('/')
  const index = pathFull.indexOf('collections')
  const entryPath = pathFull.splice(index).join('/')

  useEffect(() => {
    const tmp = JSON.parse(window.localStorage.getItem('fileSystem'))
    console.log('tmp', tmp)
    console.log('entryPath', entryPath)
    setState(tmp || null)
  }, [currentView])

  const handleClickForm = () => {
    const name = inputRef.current.value

    addFolder({
      name,
      type: 'folder',
      color: 'primary',
      parentID: location === 'collections' ? 'collections' : md5(entryPath + 'folder'),
      parentPath: location,
      path: entryPath

    })
    setInputHidden(true)
  }

  return (
    <div className='grid gap-5 w-80 mx-auto'>
      <h2>{location}</h2>
      <div className='flex justify-between '>
        <button
          className='w-36'
          onClick={() => setInputHidden(false)}
        >agregar carpeta
        </button>

        <button className='w-36' onClick={() => console.log(state)}>view</button>
      </div>

      {
      state
        ? state.collections.map((attrs, index) => {
          const listId =
            location === 'collections'
              ? state.collections[0].children
              : state.collections.find(c => c.path === entryPath).children

          if (listId.includes(attrs.id)) {
            return <FolderCollection key={index} {...attrs} />
          } else {
            return null
          }
        })
        : null
        }
      <div className={`fixed z-50 inset-0 items-center justify-center ${inputHidden ? 'hidden' : 'flex'}`}>
        <div className='container mx-auto bg-zinc-900 w-80 h-48 rounded-2xl flex justify-center items-center flex-col gap-4'>

          <p>name de folder</p>

          <input type='text' placeholder='name' id='name-folder' ref={inputRef} />

          <button className=' bg-slate-800 ' onClick={handleClickForm}>Continuar</button>
          <button className=' bg-slate-800' onClick={() => setInputHidden(true)}>Cancelar</button>

        </div>
      </div>
    </div>
  )
}

export default Collections
