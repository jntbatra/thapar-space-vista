import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <SeoHead
        page={{
          title: "Page Not Found",
          description:
            "The requested ThaparSAT page could not be found. Return to the homepage for student community updates and campus resources.",
          path: location.pathname,
        }}
      />
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
