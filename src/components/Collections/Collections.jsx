import useCollection from '../../hooks/useCollection'
import AddCollection from '../AddCollection/AddCollection'
import ListCollections from '../ListCollections/ListCollections'
import { useNavigate } from 'react-router-dom'

function Collections () {
  const { currentView, listId, setCurrentView, currentPath, entryPath, setReload, addItem } = useCollection()
  const navigate = useNavigate()

  const handleGoBack = () => {
    const backPath = entryPath.split('/')
    backPath.pop()
    navigate(`/${backPath.join('/')}`)
    setReload(prev => !prev)
  }

  return (
    <div className='grid gap-5 w-[22rem] mt-6'>
      <div className='flex justify-between'>
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
          <svg fill='#ffffff' width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path d='M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z' />
            </g>
          </svg>
        </div>

        <AddCollection
          currentPath={currentPath}
          entryPath={entryPath}
          addItem={addItem}
        />
      </div>
      <ListCollections
        listId={listId}
        currentView={currentView}
        setCurrentView={setCurrentView}
        entryPath={entryPath}
      />
    </div>
  )
}

export default Collections
