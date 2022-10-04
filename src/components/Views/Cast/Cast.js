import { useEffect, useState } from "react";
import { useFetchMovie } from "Hooks/useFetchMovie";
// import { useMatch, useLocation } from "react-router-dom";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

// /movies/:movieId/cast - компонент Cast, информация о актерском составе. 
// Рендерится на странице MovieDetails

const Cast = () => {
    const [movies, setMovies] = useState([]);
    const movie = useFetchMovie();

    const { movieId } = useParams();
    const location = useLocation();

    // useEffect(() => {
    //     moviesApi.getCast(movieId).then(setMovies);
    //     console.log('getCast movieId', movieId)
    // }, [movieId]);

    useEffect(() => {
        moviesApi.getCast(movieId).then(setMovies);
        console.log(' moviesApi.getCast(movieId)', moviesApi.getCast(movieId))
    }, [movieId]);


    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cast</h2>
            {movies.map((movie) => {
                return (
                    <div key={movie.id}>I am one Object in the Array {movie}</div>
                )
            })}
            {/* {movie && (
                <>
                    <Link to="cast" state={location.pathname}>Details</Link>
                </>
            )} */}

            {/* <Outlet /> */}
        </main>
    )
}

export default Cast;