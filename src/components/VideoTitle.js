import React from 'react'

export const VideoTitle = ( { title, overview}) => {
  return (
    <div  className='w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from black'>

    <h1 className='font-bold text-3xl'>{title}</h1>
    <p className='py-6 text-sm w-1/4'>{overview}</p>
    <div className=''>
        <button className='bg-white text-xl text-black p-4 px-12 rounded-lg hover:bg-opacity-70' >Play</button>
        <button className='bg-gray-500 mx-2 text-xl text-white p-4 px-12 rounded-lg bg-opacity-50 hover:bg-opacity-90'>More Info</button>
    </div>

    </div>
  )
}
