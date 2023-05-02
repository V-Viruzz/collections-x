import useCollection from '../../hooks/useCollection'
import ItemCollection from '../ItemCollection/ItemCollection'
import FolderCollection from '../FolderCollection/FolderCollection'

function Collections () {
  const { currentView, addFolder, addPage } = useCollection()

  return (
    <div className='grid gap-5 w-80 mx-auto'>
      <div className='flex justify-between '>
        <button className='w-36' onClick={() => addFolder('koka')}>agregar carpeta</button>
        <button className='w-36' onClick={() => addPage('lol')}>agregar pagina</button>
      </div>

      {
      currentView.map((attrs, index) => {
        if (attrs.type === 'folder') return <FolderCollection key={index} {...attrs} />
        else if (attrs.type === 'page') return <ItemCollection key={index} {...attrs} />
        else return null
      })
      }

    </div>
  )
}

export default Collections
