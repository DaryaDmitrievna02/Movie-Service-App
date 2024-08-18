import { Outlet, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between p-4 items-center bg-black">
        <Link to="/movies">
          <h1 className="text-3xl">Movie App</h1>{" "}
        </Link>
        <nav className="flex gap-5">
          <Link to="/movies">My List</Link>
          <Link to="/search">Search</Link>
        </nav>
      </div>
      <Outlet></Outlet>
    </>
  );
};
