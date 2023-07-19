import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";

const Navbar = () => {
  const { user, handleLogout } = useContext(Authcontext);
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/");
  };
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-50">
        <div className="navbar-start">
          <div className="dropdown">
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
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/registration"}>Register</Link>
              </li>

              {user && (
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className="icon flex items-center">
            <img
              src="https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-graphic-design-template-vector-illustration-png_269519.jpg"
              alt=""
              className="w-16 h-12"
            />
            <h1 className="font-akaya text-2xl font-bold">House Hunter</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="font-medium text-base flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
              }
            >
              Register
            </NavLink>

            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                    : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
                }
              >
                Dashboard
              </NavLink>
            )}
          </div>
        </div>
        <div className="navbar-end">
          {user?.name ? (
            <>
              <h1 className="mr-1 font-semibold text-base border-2 px-3 py-1 rounded-md">
                {user?.name}
              </h1>
              <button
                onClick={logout}
                className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
