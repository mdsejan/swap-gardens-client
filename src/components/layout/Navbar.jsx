import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="mr-2">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/err" className="mr-2">
          logout
        </NavLink>
      </li>

      <li tabIndex={0}>
        <details className="font-semibold">
          <summary>Dashboard</summary>
          <ul className="p-1 w-36">
            <li>
              <NavLink to="/my-services" className="mr-2">
                My-services
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-service" className="mr-2">
                Add-services
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-schedules" className="mr-2">
                My-schedules
              </NavLink>
            </li>
          </ul>
        </details>
      </li>

      {/* {!user ? (
        <li>
          <NavLink to="/login" className="mr-2">
            Login
          </NavLink>
        </li>
      ) : (
        " "
      )} */}
    </>
  );
  return (
    <div className="bg-base-100  sticky top-0 border-b z-30">
      <div className="navbar justify-between max-w-screen-2xl mx-auto px-4">
        <div className="navbar-start">
          <Link
            to="/"
            rel="noopener noreferrer"
            className="flex justify-center lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold ml-2">
              SwapGardens
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
