import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import * as moviesApi from "../../services/movie-api";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);

    const { movieId } = useParams();
    console.log('movieId: ', movieId)

    console.log('MovieDetailsPage: ', movies);
    useEffect(() => {
        moviesApi.getMovieDetails().then(setMovies)
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <main style={{ padding: "1rem 0" }}>
                <h2>MovieDetailsPage</h2>
                {movies}
                {/*  {movies.length > 0 &&
                    <ul>
                        {movies.map(({ id, name }) => (
                            <li key={id}>
                                <Link to='${id}'>{name}</Link>
                            </li>
                        ))}
                    </ul>
                } */}
            </main>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage;