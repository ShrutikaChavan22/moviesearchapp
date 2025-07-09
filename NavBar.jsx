import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="bg-gray-800 p-4 text-white flex space-x-4">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/favorites" className="hover:underline">Favorites</Link>
  </nav>
);

export default NavBar;
