// import { Outlet, Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = lazy(() => import('./Views/HomePage/HomePage.js'));
// const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetails.js'));
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage.js'));
const Cast = lazy(() => import('./Views/Cast/Cast.js'));
const Reviews = lazy(() => import('./Views/Reviews/Reviews.js'));
const NotFoundPage = lazy(() => import('./Views/NotFoundPage/NotFoundPage.js'));
const Loader = lazy(() => import('./Views/Loader/Loader.js'));
const Layout = lazy(() => import('../components/Layout/Layout'));

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <br />
        <StyledLink to="/movies">Movies</StyledLink>
        <br />
        <StyledLink to="/movies/:movieId">MovieDetailsPage</StyledLink>
        <br />
      </nav>
      <Outlet />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path=":movieId/cast" element={<Cast />} />
              <Route path=":movieId/reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route
            path="movies/:movieId/details"
            element={<MovieDetailsPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
