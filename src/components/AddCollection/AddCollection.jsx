import { useState, useRef } from 'react'
import useCollection from '../../hooks/useCollection'
import todayDate from '../../utils/todayDate'
import md5 from 'md5'

function AddCollection ({ currentPath, entryPath }) {
  const { addItem, setReload, reload } = useCollection()
  const [inputHidden, setInputHidden] = useState(true)
  const [selectType, setSelectType] = useState(null)
  const [error, setError] = useState(false)
  const nameRef = useRef(null)
  const linkRef = useRef(null)

  const handleClickForm = () => {
    const name = nameRef.current.value
    const link = selectType === 'link' ? linkRef.current.value : null

    if (!selectType) {
      console.log('type is not specified')
      setError(true)
      return
    }
    if (!name) {
      console.log('name is not specified')
      setError(true)
      return
    }

    const fileSystem = window.localStorage.getItem('fileSystem')
    const tmp = fileSystem ? JSON.parse(fileSystem).collections : []
    const existingName = tmp.some(c => c.name === name)

    if (existingName) {
      console.log('name exists')
      setError(true)
      return
    }

    addItem({
      name,
      link,
      type: selectType,
      color: 'primary',
      date: todayDate(),
      parentID: currentPath === 'collections' ? 'collections' : md5(entryPath + 'folder'),
      parentPath: currentPath,
      path: entryPath

    })
    setInputHidden(true)
    setError(false)
    setReload(!reload)
  }

  const handleClickOption = () => {
    console.log('mover')
  }

  return (
    <>
      <div className='flex justify-between gap-3'>

        <button onClick={handleClickOption}>
          <svg fill='#ffffff' width='17' height='17' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' transform='rotate(90)'>
            <g strokeWidth='0' id='SVGRepo_bgCarrier' />
            <g strokeLinecap='round' strokeLinejoin='round' id='SVGRepo_tracerCarrier' />
            <g id='SVGRepo_iconCarrier'>
              <title>elipsis</title>
              <path d='M0.384 16q0 1.632 1.12 2.784t2.784 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.784 1.152-1.12 2.752zM12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752zM23.808 16q0 1.632 1.152 2.784t2.752 1.12 2.784-1.12 1.12-2.784-1.12-2.752-2.784-1.152-2.752 1.152-1.152 2.752z' />
            </g>
          </svg>
        </button>
        <button onClick={() => setInputHidden(false)}>
          <svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#000000'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <title />
              <g id='Complete'>
                <g id='add-square'>
                  <g>
                    <rect data-name='--Rectangle' fill='none' height='20' id='_--Rectangle' rx='2' ry='2' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' width='20' x='2' y='2' />
                    <line fill='none' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' x1='15.5' x2='8.5' y1='12' y2='12' />
                    <line fill='none' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' x1='12' x2='12' y1='15.5' y2='8.5' />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>

        {/* <button className='w-36' onClick={() => console.log(state)}>view</button> */}
      </div>

      <div className={`fixed z-50 inset-0 items-center justify-center ${inputHidden ? 'hidden' : 'flex'}`}>
        <div className='container mx-auto bg-zinc-900 w-80 py-10 rounded-2xl flex justify-center items-center flex-col gap-4 relative'>
          <button
            className='absolute top-0 right-0 mx-5 my-3 p-0 text-xl border-none hover:border-none bg-inherit focus:border-0'
            onClick={() => { setInputHidden(true); setError(false) }}
          >×
          </button>

          <h3 className='text-xl'>Crear nuevo</h3>

          <ul className='flex gap-3'>
            <li
              className={`${selectType === 'folder' ? 'bg-slate-900' : 'bg-slate-800'} px-4 py-2 rounded-lg`}
              onClick={() => setSelectType('folder')}
            >
              Folder
            </li>
            <li
              className={`${selectType === 'link' ? 'bg-slate-900' : 'bg-slate-800'} px-4 py-2 rounded-lg`}
              onClick={() => setSelectType('link')}
            >
              Link
            </li>

          </ul>

          <input
            type='text'
            placeholder='name'
            id='name-folder'
            ref={nameRef}
            className={`${error ? 'border-2 border-red-700' : ''} block appearance-none w-60 rounded-lg bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
          />
          {
            selectType === 'link'
              ? <input
                  type='text'
                  placeholder='link'
                  id='link'
                  ref={linkRef}
                  className={`${error ? 'border-2 border-red-700' : ''} block appearance-none w-60 rounded-lg bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                />
              : null
          }

          <button className=' bg-slate-800 w-60 h-11 rounded-lg' onClick={handleClickForm}>Crear</button>

        </div>
      </div>
    </>
  )
}

export default AddCollection
