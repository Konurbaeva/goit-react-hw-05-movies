// import { Outlet, Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = lazy(() => import('./Views/HomePage/HomePage.js'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage.js'));
const Cast = lazy(() => import('./Views/Cast/Cast.js'));
const Reviews = lazy(() => import('./Views/Reviews/Reviews.js'));
const NotFoundPage = lazy(() => import('./Views/NotFoundPage/NotFoundPage.js'));
const Loader = lazy(() => import('./Views/Loader/Loader.js'));

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="movies/" element={<MoviesPage />} /> */}
            <Route path="movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
