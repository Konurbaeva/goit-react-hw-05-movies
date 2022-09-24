import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // const movie = moviesApi.getMovieDetails(id);
    const location = useLocation();

    useEffect(() => {
        console.log('location: ', location)
    }, [location]);

    console.log('movies: ', movies)

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)
    }

    let handleSubmit = (e, searchQuery) => {
        e.preventDefault();
        console.log('handleSubmit  was clicked')
        //     props.onSubmit(searchQuery);
        //     setSearchQuery('');
        setSearchQuery(searchQuery);
    };

    // useEffect(() => {
    //     moviesApi.searchMovies(searchQuery).then(setMovies);
    // }, [searchQuery]);

    useEffect(() => {
        moviesApi.searchMovies(searchQuery).then();
    }, [searchQuery]);

    // useEffect(() => {
    //     moviesApi.getMovieDetails().then(setMovies);
    // }, []);

    return (
        <>
            <h1>Movies search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={inputHandler}
                    value={searchQuery}
                    placeholder="Search for movies"
                />
                <button type="submit">Search</button>
                {movies && movies.map(({ id, original_title }) => (
                    <li key={id}>{original_title}</li>
                ))}
                {/* {
                    movies.map(({ id, name, original_title }) => (
                        <li key={id}>
                            <Link to={id} state={{ from: location.pathname }}>
                                {original_title}
                            </Link>
                        </li>
                    ))
                } */}

            </form>
            <Outlet />
        </>
    );
}

export default MoviesPage;