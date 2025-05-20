import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center px-4">
      <Helmet>
        <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico" />
        <title>404 - Page Not Found | Gouranga Das Samrat</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Gouranga Das Samrat's portfolio homepage."
        />
      </Helmet>

      <div className="text-center">
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-medium text-white mb-8">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
