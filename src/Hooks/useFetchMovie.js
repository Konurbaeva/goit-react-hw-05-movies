
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as moviesApi from "../services/movie-api"


export const useFetchMovie = () => {

    //  const [movie, setMovie] = useState(null);
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        moviesApi.getMovieById(movieId).then(setMovie);
    }, [movieId]);

    console.log('useFetchMovie: movie ', movie)

    return movie;
};