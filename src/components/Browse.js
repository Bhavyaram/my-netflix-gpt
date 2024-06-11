import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  //Refactor: Create a custom hook 
   useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      
      - Main container
        - Video background
        - Video title
      - secondary container
        - Movie List * n
          - Movie cards * n
      
      */}
      </div>
  )
}

export default Browse