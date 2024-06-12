import { useEffect } from 'react'
import { API_OPTIONS, POPULAR_MOVIES_API } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'



const usePopularMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
  
        getPopularMovies();
  
    }, []);
  
    const getPopularMovies = async() => {
  
      const data = await fetch( POPULAR_MOVIES_API , API_OPTIONS);
      const json = await data.json();
      //console.log(json.results);
      dispatch(addPopularMovies(json.results));
  
    }

}

export default usePopularMovies;
