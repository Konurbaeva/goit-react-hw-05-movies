import { useEffect, useState } from "react";
// import { useMatch, useLocation } from "react-router-dom";

import { Link, Outlet, useLocation } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    // const match = useMatch();
    // // is useLocation v5?
    const location = useLocation();
    useEffect(() => {
        // moviesApi.getMovieDetails().then(setMovies)
        moviesApi.getTrending().then(setMovies);
    }, []);

    // useEffect(() => {
    //     try {
    //         moviesApi.getTrending().then(data => {
    //             const mappedMovies = data.data.results.map(({ id, title }) => ({
    //                 id,
    //                 title
    //             }))
    //             console.log('mappedMovies: ', mappedMovies)
    //             setMovies(mappedMovies);
    //         })
    //     }
    //     catch (err) {
    //         console.error(err)
    //     }
    // }, [])

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>HomePage</h2>
            <h3>Trending movies</h3>
            {/* {movies && movies.map(({ id, original_title }) => (
                <li key={id}>{original_title}</li>
            ))} */}
            {movies && movies.map(({ id, original_title }) => (
                // <Link to={id}><li key={id}>{original_title}</li></Link>

                <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
                    {original_title}
                </Link>
            ))}
            <Outlet />
        </main>

    )
}

export default HomePage;