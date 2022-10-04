import { useFetchMovie } from "Hooks/useFetchMovie";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import styled from 'styled-components';
import { imageURL } from "../../../services/imageUrl"

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Button = styled.button`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: teal;
font-weight: 500;
`;



const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);

    const movie = useFetchMovie();
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    console.log('movies: ', movies)

    useEffect(() => {
        moviesApi.getMovieById(movieId).then(setMovies)
    }, [movieId]);

    return (
        <Container>
            <Button onClick={() => navigate(location?.state?.from ?? '/')}>Go Back</Button>
            <section>
                {movie && (
                    <>
                        <h2>{movie.original_title}</h2>
                        <p>User score {movie.vote_average}</p>
                        <img src={imageURL + movie.poster_path} alt={movie.poster_path} />
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        {movie.genres?.map(({ id, name }) => {
                            return (
                                <div key={id}>
                                    <p>{name}</p>
                                </div>
                            )
                        })}
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
        </Container>
    )
}

export default MovieDetailsPage;