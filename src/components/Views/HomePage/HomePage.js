import { useEffect, useState } from "react";
import { useMatch, useLocation } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

// const HomePage = () => {
//     const [movies, setMovies] = useState([]);

//     const match = useMatch();
//     // is useLocation v5?
//     const location = useLocation();

//     console.log('location: ', location);
//     console.log('match: ', match);

//     console.log('movies HomePage: ', movies);
//     useEffect(() => {
//         // moviesApi.getMovieDetails().then(setMovies)
//         moviesApi.getTrending().then(setMovies);
//     }, []);

//     return (
//         <main style={{ padding: "1rem 0" }}>
//             <h2>HomePage</h2>

//             {movies && movies.map(movie => (
//                 <li key={movie.id}>{movie}</li>
//             ))}
//         </main>
//     )
// }

const HomePage = () => {
    return <h1>Main</h1>;
}

export default HomePage;