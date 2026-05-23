import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  useTitle("404 - Not Found");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 px-4">
      <div className="text-center">
        <div className="text-9xl mb-4 animate-bounce">🧸</div>
        <h1 className="font-fun text-8xl text-primary mb-4">404</h1>
        <h2 className="font-fun text-3xl text-dark mb-4">Oops! Toy Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Looks like this toy got lost in the toy box! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="btn bg-primary text-white border-none hover:bg-orange-600 rounded-full px-8 font-bold text-lg"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
