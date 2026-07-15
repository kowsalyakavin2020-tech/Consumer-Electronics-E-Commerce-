import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary hover-lift">
        <FontAwesomeIcon icon={faHouse} /> Back to Home
      </Link>
    </div>
  );
}

export default NotFound;