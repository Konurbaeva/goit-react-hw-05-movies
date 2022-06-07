import { Outlet, Link } from "react-router-dom";

export const App  = () =>{
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
         <Link to="/">HomePage</Link>
        <Link to="/movies">MoviesPage</Link> |{" "}
        <Link to="/movies/:movieId">MovieDetailsPage</Link>
        <Link to="/movies/:movieId/cast">Cast</Link>
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}