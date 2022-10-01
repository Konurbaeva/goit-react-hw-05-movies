import { useEffect, useState } from "react";
// import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";

import { Link, Outlet, useParams, useLocation } from "react-router-dom";

import * as moviesApi from "../../../services/movie-api";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);

    const { movieId } = useParams();
    const location = useLocation();

    console.log('movieId: ', movieId)
    console.log('location: ', location)

    useEffect(() => {
        moviesApi.getMovieById(movieId).then(setMovies)
    }, [movieId]);

    return (
        <div>
            <main style={{ padding: "1rem 0" }}>
                <h2>MovieDetailsPage</h2>
                Movie with id {movieId}
            </main>
            <nav>
                {/* <Link to={`movies/${movieId}/cast`}>Credits</Link> <br />
                <Link to={`movies/${movieId}/reviews`}>Reviews</Link> */}
                <div>Additional information</div>
                <Link to={`cast`}>Credits</Link> <br />
                <Link to={`reviews`}>Reviews</Link>
            </nav>
        </div>
    )
}

export default MovieDetailsPage;