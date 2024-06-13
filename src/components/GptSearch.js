import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BACKGROUND_IMAGE } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img
        src = {NETFLIX_BACKGROUND_IMAGE}
        alt='Netflix-background'
        />
        </div>
       <GptSearchBar />
       <GptMovieSuggestions />

    </div>
  )
}

export default GptSearch