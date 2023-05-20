function FolderCollection (props) {
  const link = props.link
    .replace('https://', '')
    .replace('http://', '')
    .split('/')[0]

  return (

    <a href={props.link} target='_blank' rel='noreferrer'>
      <div className='flex w-full h-32 rounded-2xl'>

        <div className='flex flex-col justify-around items-center h-auto w-full rounded-l-2xl text-gray-50 bg-black bg-opacity-20'>
          <div className='px-5 flex w-full justify-between '>
            <h2 className='text-sm text-start'>{props.name}</h2>
          </div>

          <div />
          <div className='px-5 flex w-full justify-between '>
            <p className='text-[0.6rem] text-zinc-400'>{link}</p>
            <p className='text-[0.6rem]'>{props.date}</p>
          </div>
        </div>

        <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl text-green-200  bg-cyan-950'>
          <svg width='48px' height='48px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth={0} />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path fillRule='evenodd' clipRule='evenodd' d='M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z' fill='#ffffff' />
            </g>
          </svg>
        </div>

      </div>
    </a>

  )
}

export default FolderCollection
