import { useEffect, useState } from "react";
// import { useMatch, useLocation } from "react-router-dom";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

// /movies/:movieId/cast - компонент Cast, информация о актерском составе. 
// Рендерится на странице MovieDetails

const Cast = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        moviesApi.getCast(movieId).then(setMovies);
        console.log(' moviesApi.getCast(movieId)', moviesApi.getCast(movieId))
    }, [movieId]);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cast</h2>
            {movies.cast?.map((movie) => {
                return (
                    <div key={movie.id}>I am one Object in the Array {movie.id}</div>
                )
            })}
        </main>
    )
}

export default Cast;