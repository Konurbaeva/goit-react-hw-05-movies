import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";

import * as moviesApi from "../../services/movie-api";

// const MovieDetailsPage = () => {
//     const [movies, setMovies] = useState([]);

//     const { movieId } = useParams();
//     console.log('movieId: ', movieId)

//     console.log('MovieDetailsPage: ', movies);
//     useEffect(() => {
//         moviesApi.getMovieDetails().then(setMovies)
//     }, []);

//     return (
//         <div style={{ display: "flex" }}>
//             <main style={{ padding: "1rem 0" }}>
//                 <h2>MovieDetailsPage</h2>
//                 {movies}
//                 {/*  {movies.length > 0 &&
//                     <ul>
//                         {movies.map(({ id, name }) => (
//                             <li key={id}>
//                                 <Link to='${id}'>{name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 } */}
//             </main>
//             <Outlet />
//         </div>
//     )
// }

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location.pathname: ', location.pathname);

    return (
        <>
            {!movie && <h2>Loading ...</h2>}
            {/* {movie && (
                <>
                    <button onClick={() => navigate(location?.state?.from ?? '/')}>Go Back</button>
                    <h2>{movie.name}</h2>
                    <img src={movie.images[1].url} alt={movie.name}></img>
                    <p>Genre: {movie.classifications[0].genre.name}</p>
                    <p>Subgenre: {movie.classifications[0].subGenre.name}</p>
                </>
            )} */}
        </>
    );

}

export default MovieDetailsPage;