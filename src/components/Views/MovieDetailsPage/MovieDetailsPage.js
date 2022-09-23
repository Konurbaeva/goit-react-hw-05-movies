import { useEffect, useState } from "react";
// import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";

import { Link, Outlet, useParams, useLocation } from "react-router-dom";

import * as moviesApi from "../../../services/movie-api";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);

    const { movieId } = useParams();
    const location = useLocation();

    console.log('hash', location.hash);
    console.log('pathname', location.pathname);

    console.log('location: ', location);
    // const movieId = useParams().movieId;
    console.log('movieId: ', movieId);
    console.log('movies: ', movies);

    useEffect(() => {
        moviesApi.getMovieById(movieId).then(setMovies)
    }, [movieId]);

    return (
        <div>
            <main style={{ padding: "1rem 0" }}>
                <h2>MovieDetailsPage</h2>
                {/* {data.length > 0 &&
                    <ul>
                        {data.genres.map((data) => {
                            return <li key={data.id}><p>{data.name}</p></li>
                        })}
                    </ul>
                } */}
                {/* {movies.genres.map((movie) => (
                    <Link to={`${movie.id}`}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                    </Link>
                ))} */}

                {movies.map((movie) => (
                    <Link to={`${movie.id}`}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                    </Link>
                ))}
            </main>
            <nav>
                <Link to="/movies/get-movie-credits ">Credits</Link> <br />
                <Link to="/movies/get-movie-reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}

// const MovieDetailsPage = () => {
//     const [movie, setMovie] = useState([]);
//     const location = useLocation();
//     const navigate = useNavigate();

//     console.log('location.pathname: ', location.pathname);

//     useEffect(() => {
//         console.log('location: ', location);
//         moviesApi.getMovieDetails().then(setMovie);
//     }, [location]);

//     return (
//         <>
//             {!movie && <h2>Loading ...</h2>}
//             {movie && (
//                 <>
//                     <button onClick={() => navigate(location?.state?.from ?? '/')}>Go Back</button>
//                     <h2>{movie.name}</h2>
//                     <img src={movie.images[1].url} alt={movie.name}></img>
//                     <p>Genre: {movie.classifications[0].genre.name}</p>
//                     <p>Subgenre: {movie.classifications[0].subGenre.name}</p>
//                 </>
//             )}
//         </>
//     );

// }

export default MovieDetailsPage;