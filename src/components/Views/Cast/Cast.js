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

    // const [events, setEvents] = useState([]);
    // const location = useLocation();

    useEffect(() => {
        //  moviesApi.getCast(movieId).then(setMovies);
        moviesApi.getCast().then(setMovies);
    }, [movieId]);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cast</h2>
            {movies && movies.map(({ id, original_title }) => (
                <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
                    {original_title}
                </Link>
            ))}
            <Outlet />
        </main>
    )
}

export default Cast;