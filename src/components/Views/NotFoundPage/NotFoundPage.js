import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return <h1>Page not found, go to <Link to='/'>home page</Link></h1>;
}

export default NotFoundPage;