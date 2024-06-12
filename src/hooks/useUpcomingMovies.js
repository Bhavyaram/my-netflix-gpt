import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getUpcomingMovies();
    }, [])

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_API , API_OPTIONS );
        const json = await data.json();
        console.log(json.results);
        dispatch(addUpcomingMovies(json.results))
    }

    

}


export default useUpcomingMovies;