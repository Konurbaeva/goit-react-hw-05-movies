import { useEffect, useState } from "react";
// import { useMatch, useLocation } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    // const match = useMatch();
    // // is useLocation v5?
    // const location = useLocation();
    useEffect(() => {
        // moviesApi.getMovieDetails().then(setMovies)
        moviesApi.getTrending().then(setMovies);

    }, []);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>HomePage</h2>
            <h3>Trending movies</h3>

            {movies && movies.map(({ id, original_title }) => (
                <li key={id}>{original_title}</li>
            ))}
        </main>
    )
}

export default HomePage;