import { Link } from "react-router-dom";

export const MovieNotFound = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2">
        <p className="text-white text-4xl mb-4">Page not found</p>
        <Link to='/movies'><p>Return to home page</p></Link>
      </div>
    </>
  );
};
