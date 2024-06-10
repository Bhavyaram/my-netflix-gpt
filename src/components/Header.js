import React from 'react'
import { NETFLIX_LOGO } from '../utils/constant'


const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img
        className='w-44'
        src= {NETFLIX_LOGO}
        alt='Netflix-logo'

        />
       


    </div>
  )
}

export default Header