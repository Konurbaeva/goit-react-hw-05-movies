import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();

    console.log('location: ', location)

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)
    }

    // useEffect(() => {
    //     moviesApi.getMovieDetails().then(setMovies);
    // }, []);

    // useEffect(() => {
    //     moviesApi.searchMovies().then(setMovies);
    // }, []);

    useEffect(() => {
        moviesApi.searchMovies(searchQuery).then(setSearchQuery);
    }, [searchQuery]);

    // console.log('MoviesPage movies: ', movies);
    // console.log('MoviesPage location: ', location);

    return (
        <>
            <h1>Movies</h1>
            <input
                onChange={inputHandler}
                label="Search for movies"
            />
            <button type="submit">Search</button>
            {movies}
            {/* {movies.length > 0 && (
                <ul>
                    {movies.map(({ id, name }) => (
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