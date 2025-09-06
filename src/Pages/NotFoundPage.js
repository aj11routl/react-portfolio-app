import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <center>
        <h1>Page Not Found</h1>
        <h3>Sorry, we couldn't find the page you were looking for</h3>

        <Link to="/">
          <button>Go back home</button>
        </Link>
      </center>
    </div>
  );
}

export default NotFoundPage;
