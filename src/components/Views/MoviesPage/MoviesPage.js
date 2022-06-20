import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        moviesApi.getMovieDetails().then(setMovies);
    }, []);

    console.log('movies: ', movies);
    console.log('location: ', location);

    return (
        <>
            <h1>MoviesPage</h1>
            {/* {events.length > 0 && (
                <ul>
                    {events.map(({ id, name }) => (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location.pathname }}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )} */}

            <Outlet />
        </>
    );
}

export default MoviesPage;