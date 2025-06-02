import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <NavLink className="items-center">
          {user ? (
            <div className="relative group inline-block avatar space-x-1  avatar-online">
              <div className="sm:w-12 w-10 rounded-full">
                <img
                  src={user.photoURL}
                  alt="Profile Photo"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              {/* display Name */}
              <h1
                className="absolute top-full left-1/2 translate-x-[-50%] mt-2 
                             text-black  rounded  px-2 py-1 font-bold bg-white
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            whitespace-nowrap z-10"
              >
                {user.displayName}
              </h1>
            </div>
          ) : (
            <FaUserCircle size={34} />
          )}
        </NavLink>

        {/*  */}
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
            <NavLink className="btn" to="/signIn">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
