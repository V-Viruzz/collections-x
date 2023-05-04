// import useCollection from '../../hooks/useCollection'
import { Link } from 'react-router-dom'

function FolderCollection (props) {
  // const { setCurrentView } = useCollection()

  const DirLink = (props) => {
    // if (!props.isDirectory) {
    //   return <>{props.children}</>
    // }

    const link = `/${props.name}`
    // if (props.path) {
    //   link = `${props.path}--${props.name}`
    // }
    // if (props.parentDirectory) {
    //   link = link.split('--').slice(0, -2).join('--') || '/content/'
    // }

    return (
      <Link to={link}>
        {props.children}
      </Link>
    )
  }

  return (
    <DirLink {...props}>
      <div className='flex w-full h-32 rounded-2xl'>

        <div className='flex justify-center items-center h-auto w-full rounded-l-2xl text-gray-50 bg-black bg-opacity-20'>
          <div>
            <p className='text-center text-sm '>Folder </p>
          </div>
        </div>

        <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl text-green-200  bg-yellow-800'>
          <p>Preview</p>
        </div>

      </div>
    </DirLink>
  )
}

export default FolderCollection
