 // import { Outlet, Link } from "react-router-dom";
 import { lazy } from 'react';
import { 
    // BrowserRouter as Router,
    Routes,  Route} from "react-router-dom";

// import { HomePage } from "./HomePage/HomePage";
// import { MovieDetailsPage } from "./MovieDetailsPage/MovieDetailsPage";
// import { MoviesPage } from "./MoviesPage/MoviesPage";
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import { NotFoundPage } from "./NotFoundPage";


const HomePage = lazy(() => import('./HomePage/HomePage.js'));
// const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetails.js'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage/MovieDetailsPage'))
const  MoviesPage = lazy(() => import('./MoviesPage/MoviesPage.js'));
const Cast = lazy(() => import('./Cast/Cast.js'));
const Reviews = lazy(() => import('./Reviews/Reviews.js'));


export const App  = () =>{
  return (
    <div>
     <Routes>
        <Route path="/" element={<HomePage />}>       
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
      </Routes>
    </div>
  );
}