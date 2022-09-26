import { useEffect, useState } from "react";
import * as moviesApi from "../../../services/movie-api";
import { useLocation, Link, Outlet } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // const movie = moviesApi.getMovieDetails(id);
    const location = useLocation();

    console.log('movies: ', movies)

    let handleSearch = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)
    }

    let handleInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)

    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit  was clicked')
        moviesApi.searchMovies(searchQuery).then(setMovies);
    };

    // useEffect(() => {
    //     moviesApi.searchMovies(searchQuery).then(setMovies);
    // }, [searchQuery]);

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
                <button type="submit" >Search</button>
                {/* {movies && movies.map(({ id, original_title }) => (
                    <li key={id}>{original_title}</li>
                ))} */}

                {movies && movies.map(({ id, original_title }) => (
                    // <Link to={id}><li key={id}>{original_title}</li></Link>

                    <Link to={`${id}`} state={{ from: location.pathname }}>
                        {original_title}
                    </Link>
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