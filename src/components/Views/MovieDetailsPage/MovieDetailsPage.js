import { useEffect, useState } from "react";
// import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";

import { Link, useParams, useLocation } from "react-router-dom";

// import CardMovie from '../../../components/CardMovie/CardMovie'
import * as moviesApi from "../../../services/movie-api";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();
    //  const location = useLocation();

    useEffect(() => {
        moviesApi.getMovieById(movieId).then(setMovies)
    }, [movieId]);

    console.log('MovieDetailsPage movies: ', movies)

    return (
        <div>
            <main style={{ padding: "1rem 0" }}>
                <h2>MovieDetailsPage</h2>
                Movie with id {movieId}
            </main>
            <section>

                {/* <CardMovie
                    id={id}
                    poster_path={poster_path}
                    original_title={original_title}
                    vote_average={vote_average}
                    overview={overview}
                    genres={genres}
                /> */}

            </section>
            <nav>
                <div>Additional information</div>
                <Link to={`cast`}>Credits</Link> <br />
                <Link to={`reviews`}>Reviews</Link>
            </nav>
        </div>
    )
}

export default MovieDetailsPage;