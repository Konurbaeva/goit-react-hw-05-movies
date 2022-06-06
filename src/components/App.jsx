import { Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { MovieDetailsPage } from "./MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";


export const App = () => (
  <>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/movies">
      <MoviesPage />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetailsPage />
    </Route>
    <Route path="/movies/:movieId/cast">
      <Cast />
    </Route>
    <Route path="/movies/:movieId/reviews">
      <Reviews />
    </Route>
  </>
);