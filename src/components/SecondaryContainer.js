import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-40 pl-10 relative z-20'>
      <MovieList title={"Now Playing"} movies ={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies ={movies?.popularMovies} />
      <MovieList title={"Upcoming"} movies ={movies?.upcomingMovies} />
      <MovieList title={"Horror"} movies ={movies?.nowPlayingMovies} />
      <MovieList title={"Documenteries"} movies ={movies?.nowPlayingMovies} />

      </div>
      

      {/* 
      
      Movie list - popular
       trending
       Now playing
       Horror 

       each will have mu;tiple movie cards
       
       */}
    </div> )
    
  )
}

export default SecondaryContainer