 // import { Outlet, Link } from "react-router-dom";
 import { lazy } from 'react';
import { 
    Routes,  Route} from "react-router-dom";

const HomePage = lazy(() => import('./Views/HomePage/HomePage.js'));
// const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetails.js'));
const MovieDetailsPage = lazy(() => import('./Views/MovieDetailsPage/MovieDetailsPage'))
const  MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage.js'));
const Cast = lazy(() => import('./Views/Cast/Cast.js'));
const Reviews = lazy(() => import('./Views/Reviews/Reviews.js'));
const  NotFoundPage = lazy(() => import('./Views/NotFoundPage/NotFoundPage.js'));


export const App  = () =>{
  return (
    <div> 
        {/* <Routes>
        <Route>
        <Route index element={<HomePage />}>
        </Route>
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
      </Routes> */}
        <Routes>
        <Route>
        <Route index element={<HomePage />}>
        </Route>
        <Route path="/movies/" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />} />
          <Route path=":movieId/cast" element={<Cast />} />
          <Route path=":movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
      </Routes>
    </div>
  );
}