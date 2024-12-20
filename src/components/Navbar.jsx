import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // <div className="flex flex-row gap-4 place-content-evenly">
    //   <NavLink to="/">Home</NavLink>
    //   <NavLink to="/pastes">Pastes</NavLink>
    // </div>
    <nav className="bg-indigo-500 rounded">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-white text-xl font-bold">
          <img
              src="/notes_icon.png" /* Path to the logo in the public folder */
              alt="Logo"
              className="h-12 w-auto"
            />
          </NavLink>

          {/* Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/pastes"
              className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Pastes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

    
  );
}

export default Navbar;
