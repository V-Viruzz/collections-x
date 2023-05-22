import useCollection from '../../hooks/useCollection'
import { Link } from 'react-router-dom'

function Folder (props) {
  const { reload, setReload } = useCollection()

  const handleClick = () => {
    // console.log('click', props)
    setReload(!reload)
  }

  const DirLink = (props) => {
    const url = props.path.split('/')
    const index = url.indexOf('collections')
    const pathFolder = url.splice(index + 1).join('/')

    return (
      <Link to={pathFolder}>
        {props.children}
      </Link>
    )
  }

  return (

    <DirLink {...props}>
      <div className='flex w-full h-32 rounded-2xl' onClick={handleClick}>

        <div className='flex flex-col justify-around items-center h-auto w-full rounded-l-2xl text-gray-50 bg-black bg-opacity-20'>
          <div />
          <div>
            <h2 className='text-center text-xl '>{props.name}</h2>
          </div>
          <div className='px-3 flex w-full justify-end '>
            <p className='text-[0.6rem]'>{props.date}</p>
          </div>
        </div>

        <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl text-green-200  bg-yellow-600'>
          <svg fill='#ffffff' width='48px' height='48px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z' /></g></svg>
        </div>

      </div>
    </DirLink>

  )
}

export default Folder
