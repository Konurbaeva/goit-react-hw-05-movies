import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from "../../../services/movie-api";
import { imageURL } from "../../../services/imageUrl"

const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        moviesApi.getReviews(movieId).then(setReviews);
    }, [movieId]);


    return (
        <div>
            {reviews?.length > 0 ? reviews?.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h2>Author: {movie.author}</h2>
                        <p>Character: {movie.content}</p>
                    </div>
                )
            }) : <h2>No reviews</h2>}
        </div>
    )
}

export default Reviews;