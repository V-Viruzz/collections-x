import React from 'react'

function Collections () {
  return (
    <div className='grid gap-5 w-80 mx-auto'>
      <div className='flex w-full h-32 rounded-2xl'>

        <div className='flex justify-center items-center h-auto w-full rounded-l-2xl text-gray-50 bg-black bg-opacity-20'>
          <div>
            <p className='text-center text-sm '>Page</p>
          </div>
        </div>

        <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl text-green-200  bg-gray-800'>
          <p>Preview</p>

        </div>
      </div>

    </div>
  )
}

export default Collections
