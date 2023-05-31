import useCollection from '../../hooks/useCollection'
import AddCollection from '../../components/AddCollection/AddCollection'
import ListCollections from '../../components/ListCollections/ListCollections'
import HeaderCollection from '../../components/HeaderCollection/HeaderCollection'

function Collections () {
  const { addItem, setData, entryPath, currentPath } = useCollection()

  return (
    <div className='flex flex-col min-h-screen w-screen'>

      <HeaderCollection
        setData={setData}
      />

      <main className='flex items-center justify-center'>
        <div className='grid gap-5 w-[22rem] mt-6'>

          <AddCollection
            addItem={addItem}
            entryPath={entryPath}
            currentPath={currentPath}
          />

          <ListCollections
            entryPath={entryPath}
          />

        </div>
      </main>
    </div>
  )
}

export default Collections
