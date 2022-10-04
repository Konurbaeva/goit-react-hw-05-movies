import { useEffect, useState } from "react";
// import { useMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import { imageURL } from "../../../services/imageUrl"

const Cast = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        moviesApi.getCast(movieId).then(setMovies);
    }, [movieId]);

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Cast</h2>
            {movies.cast?.map((movie) => {
                return (
                    <div key={movie.id}>
                        <img src={imageURL + movie.profile_path} alt={movie.profile_path} />
                        <p>Name: {movie.name}</p>
                        <p>Character: {movie.character}</p>
                    </div>
                )
            })}
        </main>
    )
}

export default Cast;