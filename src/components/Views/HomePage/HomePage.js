import { useEffect, useState } from "react";
// import { useMatch, useLocation } from "react-router-dom";

import { Link, Outlet, useLocation } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    useEffect(() => {
        moviesApi.getTrending().then(setMovies);
    }, []);



    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>HomePage</h2>
            <h3>Trending today</h3>
            <ul>
                {movies && movies.map(({ id, original_title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
                            {original_title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </main>

    )
}

export default HomePage;