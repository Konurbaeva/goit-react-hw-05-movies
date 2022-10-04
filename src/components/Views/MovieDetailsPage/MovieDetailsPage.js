import { useFetchMovie } from "Hooks/useFetchMovie";
import { Suspense, useEffect, useState } from "react";
// import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
// import CardMovie from '../../../components/CardMovie/CardMovie'
import * as moviesApi from "../../../services/movie-api";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);

    const movie = useFetchMovie();
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    console.log('location: ', location)
    console.log('movie: ', movie)

    useEffect(() => {
        moviesApi.getMovieById(movieId).then(setMovies)
    }, [movieId]);

    return (
        <div>
            <button onClick={() => navigate(location?.state?.from ?? '/')}>Go Back</button>
            <section>
                {/* {movies && movies.map(({ id, poster_path, original_title, vote_average, overview, genres }) => (
                    <CardMovie
                        id={id}
                        poster_path={poster_path}
                        original_title={original_title}
                        vote_average={vote_average}
                        overview={overview}
                        genres={genres}
                    />
                ))} */}
                {movie && (
                    <>
                        <h2>{movie.original_title}</h2>
                        <p>User score {movie.vote_average}</p>
                        {/* <img src={movie.poster_path} alt={movie.original_title}></img> */}
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <p>TBD map over genres</p>
                    </>
                )}
            </section>
            <nav>
                <div>Additional information</div>
                <Link to={`cast`}>Cast</Link> <br />
                <Link to={`reviews`}>Reviews</Link>
                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>

            </nav>
        </div>
    )
}

export default MovieDetailsPage;