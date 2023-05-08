import { useEffect, useState } from 'react'
import useCollection from '../../hooks/useCollection'
import FolderCollection from '../FolderCollection/FolderCollection'
import { useParams } from 'react-router-dom'
import Input from '../Input/Input'
import md5 from 'md5'

function Collections () {
  const { currentView, addFolder } = useCollection()
  const [state, setState] = useState()
  const [inputHidden, setInputHidden] = useState(true)
  const location = useParams()

  useEffect(() => {
    const tmp = JSON.parse(window.localStorage.getItem('fileSystem'))
    console.log('tmp', tmp)
    console.log(location['*'])
    setState(tmp || null)
  }, [currentView])

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target['name-folder'].value
    console.log('submit')
    addFolder({
      name,
      type: 'folder',
      color: 'primary',
      parentID: location['*'] === undefined ? 'collections' : md5(location['*'] + 'folder')

    })
    setInputHidden(true)
  }

  return (
    <div className='grid gap-5 w-80 mx-auto'>
      <h2>{currentView.name}</h2>
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
            location['*'] === undefined
              ? state.collections[0].children
              : state.collections.find(c => c.name === location['*']).children

          console.log(listId)
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
          <form
            onSubmit={handleSubmit}
          >
            <p>name de folder</p>

            <Input type='text' placeholder='name' id='name-folder' />

            <button className=' bg-slate-800 '>Continuar</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Collections
