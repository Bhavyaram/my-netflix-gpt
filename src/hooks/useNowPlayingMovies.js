import { useEffect } from 'react'
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'



const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
  
      getNowPlayingMovies();
  
    }, []);
  
    const getNowPlayingMovies = async() => {
  
      const data = await fetch( NOW_PLAYING_API , API_OPTIONS);
      const json = await data.json();
      //console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
  
    }

}

export default useNowPlayingMovies;
