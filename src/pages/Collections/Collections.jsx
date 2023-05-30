import useCollection from '../../hooks/useCollection'
import AddCollection from '../../components/AddCollection/AddCollection'
import ListCollections from '../../components/ListCollections/ListCollections'
import HeaderCollection from '../../components/HeaderCollection/HeaderCollection'

function Collections () {
  const { currentView, setCurrentView, currentPath, entryPath, addItem, listId } = useCollection()

  return (
    <div className='flex flex-col min-h-screen w-screen'>

      <HeaderCollection />

      <main className='flex items-center justify-center'>
        <div className='grid gap-5 w-[22rem] mt-6'>

          <AddCollection
            currentView={currentView}
            currentPath={currentPath}
            entryPath={entryPath}
            addItem={addItem}
          />

          <ListCollections
            listId={listId}
            currentView={currentView}
            setCurrentView={setCurrentView}
            entryPath={entryPath}
          />

        </div>
      </main>
    </div>
  )
}

export default Collections
