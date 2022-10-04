import { useEffect, useState } from "react";
// import { useMatch, useLocation } from "react-router-dom";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

const Cast = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        moviesApi.getCast(movieId).then(setMovies);
    }, [movieId]);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cast</h2>
            {movies.cast?.map((movie) => {
                return (
                    <div key={movie.id}>
                        <img src={movie.backdrop_path} alt={movie.backdrop_path} />
                        <p>Name: {movie.name}</p>
                        <p>Character: {movie.character}</p>
                    </div>
                )
            })}
        </main>
    )
}

export default Cast;