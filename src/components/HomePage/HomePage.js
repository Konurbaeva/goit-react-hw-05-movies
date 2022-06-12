import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { useMatch, useLocation } from "react-router-dom";
import * as moviesApi from "../../services/movie-api";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    // const match = useRouteMatch();
    // const match = useMatch();
    // console.log(match);

    const location = useLocation();

    console.log('location: ', location);

    console.log('movies HomePage: ', movies);
    useEffect(() => {
        // moviesApi.getMovieDetails().then(setMovies)
        moviesApi.getTrending().then(setMovies);
    }, []);


    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>HomePage</h2>
            {movies && movies.map(movie => (
                <li key={movie.id}>{movie}</li>
            ))}
        </main>
    )
}