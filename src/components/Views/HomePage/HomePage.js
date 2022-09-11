import { useEffect, useState } from "react";
// import { useMatch, useLocation } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    // const match = useMatch();
    // // is useLocation v5?
    // const location = useLocation();
    useEffect(() => {
        // moviesApi.getMovieDetails().then(setMovies)
        moviesApi.getTrending().then(setMovies);

    }, []);

    //     adult: false
    // backdrop_path: "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
    // genre_ids: (3) [28, 12, 14]
    // id: 616037
    // media_type: "movie"
    // original_language: "en"
    // original_title: "Thor: Love and Thunder"
    // overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late."
    // popularity: 5471.218
    // poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
    // release_date: "2022-07-06"
    // title: "Thor: Love and Thunder"
    // video: false
    // vote_average: 6.815
    // vote_count: 2928

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>HomePage</h2>
            <h3>Trending movies</h3>

            {movies && movies.map(({ id, original_title }) => (
                <li key={id}>{original_title}</li>
            ))}
        </main>
    )
}

export default HomePage;