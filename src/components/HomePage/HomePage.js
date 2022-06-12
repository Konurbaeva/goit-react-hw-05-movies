import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as moviesApi from "../../services/movie-api";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    console.log('movies: ', movies);
    useEffect(() => {
        moviesApi.getMovieDetails().then(setMovies)
        moviesApi.getTrending().then(setMovies);
    }, []);


    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>HomePage</h2>
        </main>
    )
}