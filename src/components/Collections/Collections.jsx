import { useEffect } from 'react'
import useCollection from '../../hooks/useCollection'
import ItemCollection from '../ItemCollection/ItemCollection'
import FolderCollection from '../FolderCollection/FolderCollection'
import { useParams } from 'react-router-dom'

function Collections () {
  const { currentView, addFolder, addPage, setCurrentView } = useCollection()
  const { name } = useParams()

  useEffect(() => {
    // const res = currentView.collections.find(item => item.name === name)
    console.log(currentView)

    // if (res !== undefined) {
    //   setCurrentView(res)
    // }
  })
  console.log(currentView)
  return (
    <div className='grid gap-5 w-80 mx-auto'>
      <h2>{currentView.name}</h2>
      <div className='flex justify-between '>
        <button className='w-36' onClick={() => addFolder('koka')}>agregar carpeta</button>
        <button className='w-36' onClick={() => addPage('lol')}>agregar pagina</button>
      </div>

      {
        currentView
          ? currentView.collections.map((attrs, index) => {
            if (attrs.type === 'folder') return <FolderCollection key={index} {...attrs} />
            else if (attrs.type === 'page') return <ItemCollection key={index} {...attrs} />
            else return null
          })
          : null
      }

    </div>
  )
}

export default Collections
