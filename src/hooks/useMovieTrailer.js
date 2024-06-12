import { useEffect } from 'react'
import {API_OPTIONS} from "../utils/constant"
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import {MOVIE_TRAILER_API} from "../utils/constant";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        getMovieTrailer();
    }, []);


    const getMovieTrailer = async() => {

        const data = await fetch(MOVIE_TRAILER_API+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        //console.log(json.results);

        const filterData = json.results.filter(x => (x.type === "Trailer") && (x.name === "Official Trailer"));
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));


        
        // console.log(filterData);
        // console.log(trailer);
        
    }

}


export default useMovieTrailer;