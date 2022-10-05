import { useState } from "react";
import * as moviesApi from "../../../services/movie-api";
import { useLocation, Link, Outlet } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: teal;
font-weight: 500;
`;

const Input = styled.input`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: teal;
font-weight: 500;
`;

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    let handleInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchQuery(lowerCase)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        moviesApi.searchMovies(searchQuery).then(setMovies);
    };

    return (
        <>
            <h1>Movies search</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    onChange={handleInput}
                    value={searchQuery}
                    placeholder="Search for movies"
                />
                <Button type="submit">Search</Button>
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