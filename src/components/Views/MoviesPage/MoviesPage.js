import { useEffect, useState } from "react";
import * as moviesApi from "../../../services/movie-api";
import { useLocation, Link, Outlet } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // const movie = moviesApi.getMovieDetails(id);
    const location = useLocation();

    let handleInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        moviesApi.searchMovies(searchQuery).then(setMovies);
    };

    useEffect(() => {
        moviesApi.getMovieDetails().then(setMovies);
    }, []);

    return (
        <>
            <h1>Movies search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInput}
                    value={searchQuery}
                    placeholder="Search for movies"
                />
                <button type="submit">Search</button>
                <ul>
                    {movies && movies.map(({ id, original_title }) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
                                {original_title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </form>
            <Outlet />
        </>
    );
}

export default MoviesPage;