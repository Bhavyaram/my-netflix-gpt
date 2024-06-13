import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {


  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  //Refactor: Create a custom hook 
   useNowPlayingMovies();
   usePopularMovies();
   useUpcomingMovies();

  return (
    <div>
      <Header />
      {
      
      showGptSearch ? (
      <GptSearch />
    ) :  (
    <>
      <MainContainer />
      <SecondaryContainer />
      </>
      )
      }
      
      
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