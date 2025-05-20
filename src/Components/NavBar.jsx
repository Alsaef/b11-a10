import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';

const Navbar = () => {
    
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
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/login" className="btn btn-outline mr-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
