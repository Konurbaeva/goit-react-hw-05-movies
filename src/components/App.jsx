import { Route, Routes } from 'react-router-dom';

import { HomePage } from "./HomePage/HomePage";
import { MovieDetailsPage } from "./MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NotFoundPage } from "./NotFoundPage";


export const App = () => (
  <>
    <Routes>
    <Route index element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />

          <Route path="*" element={<NotFoundPage />} />
  </Routes>
  </>
);