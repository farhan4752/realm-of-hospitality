import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle log out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => console.error(error));
  };

  // Toggle dropdown menu when profile picture is clicked
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/updatedProfile">Updated Profile</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-300 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 bg-red-500 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="rounded-tl-full rounded-br-full bg-black text-xl text-red-500 px-5 py-2 font-bold font-cursive">
          Realm of Hospitality
        </a>
      </div>

      <div className="hidden lg:flex w-full justify-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Profile Section */}
      <div className="navbar-end flex gap-4">
        {/* Avatar and Dropdown Menu */}
        <div className="relative">
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDropdown}
            className="btn btn-ghost btn-circle avatar hover:bg-gray-100 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full ring ring-offset-2 ring-green-500 overflow-hidden shadow-md">
              <img
                alt="User Avatar"
                src={
                  user && user.photoURL
                    ? user.photoURL
                    : "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                }
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && user && (
            <ul
              tabIndex={0}
              className="absolute right-0 menu menu-sm dropdown-content bg-white rounded-xl shadow-lg mt-3 p-4 w-60 border border-gray-200"
            >
              <li className="text-gray-500 font-semibold mb-2">
                Email: {user.email}
              </li>
              <li className="text-gray-500 font-semibold mb-2">
                Name: {user.displayName}
              </li>

              <li>
                <button onClick={handleLogOut} className="btn btn-warning">
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Show Login button if no user is logged in */}
        {!user && (
          <div className="navbar-end">
            <Link to="/login">
              <button className="btn  btn-success">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
