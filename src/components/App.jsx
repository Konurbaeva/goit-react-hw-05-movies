// import { Outlet, Link } from "react-router-dom";
import { lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import { HomePage } from './Views/HomePage/HomePage';
// import { MoviesPage } from './Views/MoviesPage/MoviesPage';
// import { MovieDetailsPage } from './Views/MovieDetailsPage';
// import { Cast } from './Views/Cast/Cast';
// import { Reviews } from './Views/Reviews/Review';
// import { NotFoundPage } from './Views/NotFound/NotFound';

// import HomePage from './Views/HomePage';
// import MoviesPage from './Views/MoviesPage';
// import MovieDetailsPage from './Views/MovieDetailsPage';
// import Cast from './Views/Cast/Cast';
// import Reviews from './Views/Reviews';
// import NotFoundPage from './Views/NotFound';

const HomePage = lazy(() => import('./Views/HomePage/HomePage.js'));
// const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetails.js'));
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage.js'));
const Cast = lazy(() => import('./Views/Cast/Cast.js'));
const Reviews = lazy(() => import('./Views/Reviews/Reviews.js'));
const NotFoundPage = lazy(() => import('./Views/NotFoundPage/NotFoundPage.js'));

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movies:movieId">MovieDetailsPage</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />} />
          <Route path=":movieId/cast" element={<Cast />} />
          <Route path=":movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
