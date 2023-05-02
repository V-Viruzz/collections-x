import useCollection from '../../hooks/useCollection'

function FolderCollection ({ name }) {
  const { setCurrentView } = useCollection()
  const handleClick = () => {
    console.log('open folder collection')
    setCurrentView([])
  }

  return (
    <div className='flex w-full h-32 rounded-2xl' onClick={handleClick}>

      <div className='flex justify-center items-center h-auto w-full rounded-l-2xl text-gray-50 bg-black bg-opacity-20'>
        <div>
          <p className='text-center text-sm '>Folder {name}</p>
        </div>
      </div>

      <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl text-green-200  bg-yellow-800'>
        <p>Preview</p>
      </div>

    </div>
  )
}

export default FolderCollection
