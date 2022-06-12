// import { Link, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as moviesApi from "../../services/movie-api";

// export const MovieDetailsPage = () => {
//     const [movies, setMovies] = useState([]);

//     console.log('movies: ', movies);

//     useEffect(() => {
//         moviesApi.getMovieDetails().then(setMovies)
//     }, []);

//     return (
//         <div style={{ display: "flex" }}>
//             <main style={{ padding: "1rem 0" }}>
//                 <h2>MovieDetailsPage</h2>
//                 {movies.length > 0 &&
//                     <ul>
//                         {movies.map(({ id, name }) => (
//                             <li key={id}>
//                                 <Link to='${id}'>{name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 }
//             </main>
//             <Outlet />
//         </div>
//     )
// }

export const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);

    console.log('MovieDetailsPage: ', movies);
    useEffect(() => {
        moviesApi.getMovieDetails().then(setMovies)
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <main style={{ padding: "1rem 0" }}>
                <h2>MovieDetailsPage</h2>
                {movies}
            </main>
            <Outlet />
        </div>
    )
}