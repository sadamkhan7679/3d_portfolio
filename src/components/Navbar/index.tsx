import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-400 transition-colors duration-300 ${
              isActive ? "text-blue-400" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-400 transition-colors duration-300 ${
              isActive ? "text-blue-400" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `hover:text-blue-400 transition-colors duration-300 ${
              isActive ? "text-blue-400" : ""
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-blue-400 transition-colors duration-300 ${
              isActive ? "text-blue-400" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
