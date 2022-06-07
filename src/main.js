import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { HomePage } from "./HomePage/HomePage";
import { MovieDetailsPage } from "./MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
//import { NotFoundPage } from "./NotFoundPage";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/movies" element={< MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="/movies/:movieId/cast" element={<Cast />} />
                    <Route path="/movies/:movieId/reviews" element={<Reviews />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);