import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="btn btn-primary px-5 py-2 text-lg">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
