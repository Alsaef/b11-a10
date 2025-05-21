import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import useTheme from "../hook/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
     const { theme, toggleTheme } = useTheme();
     const {user,logOut }=useContext(AuthContext)
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add to Find Roommate</Link></li>
            <li><Link to="/browse">Browse Listing</Link></li>
            <li><Link to="/my-listings">My Listings</Link></li>
              {
            !user?.email&&<>
            <li> <Link to="/login">
          Login
        </Link></li>
          <li><Link to="/signup">
          SignUp
        </Link></li>
            </>
          }
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl"><img className="w-[100px]" src={Logo} alt="" /></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add to Find Roommate</Link></li>
          <li><Link to="/browse">Browse Listing</Link></li>
          <li><Link to="/my-listings">My Listings</Link></li>
          {
            !user?.email&&<>
            <li> <Link to="/login">
          Login
        </Link></li>
          <li><Link to="/signup">
          SignUp
        </Link></li>
            </>
          }
        </ul>
      </div>

      <div className="navbar-end gap-3">


{user?.email&&<div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?.photoURL ? (
            <img src={user.photoURL} alt={user?.displayName} />
          ) : (
            <div className="bg-neutral text-neutral-content w-10 h-10 flex items-center justify-center rounded-full">
              <span className="text-xl">
                {user?.displayName?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>

      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
        <li><p className="text-sm font-semibold">{user?.displayName || "User"}</p></li>
        <li><button onClick={logOut} className="text-red-500">Logout</button></li>
      </ul>
    </div>}
       <button onClick={toggleTheme} className="btn w-[100px] btn-outline rounded-full">
      {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
      <span className="ml-2">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
      </div>
    </div>
  );
};

export default Navbar;
