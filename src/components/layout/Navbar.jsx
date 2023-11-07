import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider";
import { RiPlantFill } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(ThemeContext);

  const handleLogOut = () => {
    logOut().then();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-swaps" className="mr-2">
          All Swaps
        </NavLink>
      </li>
      {!user ? (
        <li>
          <NavLink to="/login" className="mr-2">
            Login
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <button
              onClick={handleLogOut}
              className="hover:bg-transparent text-red-800 hover:text-red-600 font-semibold hover:font-bold"
            >
              Logout
            </button>
          </li>
          <li tabIndex={0}>
            <details className="font-semibold">
              <summary>Dashboard</summary>
              <ul className="p-1 w-36">
                <li>
                  <NavLink to="/add-swap" className="mr-2">
                    Add Swap
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-swaps" className="mr-2">
                    My Swaps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-schedule" className="mr-2">
                    My Schedules
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </>
      )}
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
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#ACD27A]">
              <RiPlantFill className="text-white text-2xl"></RiPlantFill>
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
