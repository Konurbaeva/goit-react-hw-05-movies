import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import { useLocation, useParams } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const { id } = useParams();
    const movie = moviesApi.getMovieDetails(id);

    const location = useLocation();

    console.log('location: ', location)

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)
    }

    useEffect(() => {
        moviesApi.searchMovies(searchQuery).then(setMovies);
    }, [searchQuery]);

    // useEffect(() => {
    //     moviesApi.getMovieDetails().then(setMovies);
    // }, []);


    return (
        <>
            <h1>Movies</h1>
            <input
                onChange={inputHandler}
                value={searchQuery}
                placeholder="Search for movies"
            />
            <button type="submit">Search</button>
            Movie - {movie}
            {movies && movies.map(({ id, original_title }) => (
                <li key={id}>{original_title}</li>
            ))}
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