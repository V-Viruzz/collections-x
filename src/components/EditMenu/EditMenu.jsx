import { useState, useRef, useContext } from 'react'
import { CollectionContext } from '../../context/collection'

function EditMenu ({ inputHidden, setInputHidden, setIsOver, editItem, type, id, name, link }) {
  const [error, setError] = useState(false)
  const { setReload } = useContext(CollectionContext)
  const nameRef = useRef(null)
  const linkRef = useRef(null)

  const handleClickForm = () => {
    let newName = nameRef.current.value
    let newLink = type === 'link' ? linkRef.current.value : null

    if (!newName && !newLink) {
      console.log('not specified')
      setInputHidden(true)
      return
    }

    const fileSystem = window.localStorage.getItem('fileSystem')
    const tmp = fileSystem ? JSON.parse(fileSystem).collections : []
    const isExistingName = tmp.some(c => c.name === newName)

    if (isExistingName) {
      console.log('name exists')
      setError(true)
      return
    }

    if (!newName) newName = name
    if (!newLink) newLink = link

    editItem({
      id,
      newName,
      newLink
    })
    // setIsOver(false)
    setInputHidden(true)
    setReload(prev => !prev)
  }

  return (
    <div className={`fixed z-50 inset-0 items-center justify-center ${inputHidden ? 'hidden' : 'flex'}`}>
      <div className='container mx-auto bg-zinc-900 w-80 py-10 rounded-2xl flex justify-center items-center flex-col gap-4 relative'>
        <button
          className='absolute top-0 right-0 mx-5 my-3 p-0 text-xl border-none hover:border-none bg-inherit focus:border-0'
          onClick={() => { setInputHidden(true); setError(false) }}
        >×
        </button>

        <h3 className='text-xl'>Edit</h3>

        <input
          type='text'
          placeholder='name'
          id='name-folder'
          ref={nameRef}
          className={`${error ? 'border-2 border-red-700' : ''} block appearance-none w-60 rounded-lg bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
        />

        {
        type === 'link'
          ? <input
              type='text'
              placeholder='link'
              id='link'
              ref={linkRef}
              className={`${error ? 'border-2 border-red-700' : ''} block appearance-none w-60 rounded-lg bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
            />
          : null
        }

        <button
          onClick={handleClickForm}
          className=' bg-slate-800 w-60 h-11 rounded-lg'
        >Crear
        </button>

      </div>
    </div>
  )
}

export default EditMenu
