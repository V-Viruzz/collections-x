import { useState, useRef, useContext } from 'react'
import { CollectionContext } from '../../context/collection'
import { useNavigate } from 'react-router-dom'
import todayDate from '../../utils/todayDate'
import md5 from 'md5'

function AddCollection ({ addItem, entryPath, currentPath }) {
  const { setReload } = useContext(CollectionContext)
  const [inputHidden, setInputHidden] = useState(true)
  const [selectType, setSelectType] = useState(null)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const nameRef = useRef(null)
  const linkRef = useRef(null)

  const handleClickForm = (event) => {
    event.preventDefault()

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

    if (!link && selectType === 'link') {
      console.log('link is not specified')
      setError(true)
      return
    }

    const fileSystem = window.localStorage.getItem('fileSystem')
    const tmp = fileSystem ? JSON.parse(fileSystem).collections : []
    const existingName = tmp.some(c => c.name === name)

    // const existingName = currentView.some(c => c.name === name)

    if (existingName) {
      console.log('name exists')
      setError(true)
      return
    }

    const idpa = md5(entryPath + 'folder')

    addItem({
      name: name.trim(),
      link,
      type: selectType,
      color: 'primary',
      date: todayDate(),
      parentID: currentPath === 'collections' ? 'collections' : idpa,
      parentPath: currentPath,
      path: entryPath

    })

    console.log('add collection')
    setInputHidden(true)
    setError(false)
    setReload(prev => !prev)
  }

  const handleGoBack = () => {
    const backPath = entryPath.split('/')
    backPath.pop()
    navigate(`/${backPath.join('/')}`)
    setReload(prev => !prev)
  }

  return (
    <div className='flex justify-between'>

      {/* Collection bar */}
      <div className='flex gap-2 items-center'>
        {
          currentPath !== 'collections' &&
            <button onClick={handleGoBack}>
              <svg width='18px' height='18px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#ffffff'>
                <g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                <g id='SVGRepo_iconCarrier'>
                  <title />
                  <g id='Complete'>
                    <g id='F-Chevron'>
                      <polyline fill='none' id='Left' points='15.5 5 8.5 12 15.5 19' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
        }

        <h2 className='text-base font-bold'>{currentPath}</h2>
        <svg className='fill-current' width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
          <g id='SVGRepo_iconCarrier'>
            <path d='M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z' />
          </g>
        </svg>
      </div>

      <div className='flex justify-between gap-3'>
        <button onClick={() => setInputHidden(false)}>
          <svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <g id='Edit / Add_Plus_Square'>
                <path className='stroke-current' id='Vector' d='M8 12H12M12 12H16M12 12V16M12 12V8M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </g>
            </g>
          </svg>
        </button>
      </div>

      {/* Menu to add collection */}
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

          <form className='flex flex-col gap-4'>
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

            <button
              onClick={handleClickForm}
              className=' bg-slate-800 w-60 h-11 rounded-lg'
            >Crear
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddCollection
