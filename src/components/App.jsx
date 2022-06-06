import { Outlet, Link } from "react-router-dom";

export const App  = () =>{
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/movies">MoviesPage</Link> |{" "}
        <Link to="/movies/:movieId">MovieDetailsPage</Link>
        <Link to="/movies/:movieId/cast">Cast</Link>
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}