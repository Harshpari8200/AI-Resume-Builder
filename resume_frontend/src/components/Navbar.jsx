import React from "react";
import { Link } from "react-router";
import { FaFileAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-lg px-4 sm:px-8">
        <div className="flex-1">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <FaFileAlt className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Resume Maker
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/about" className="btn btn-ghost rounded-lg text-base-content hover:bg-base-200">
            About
          </Link>
          <Link to="/services" className="btn btn-ghost rounded-lg text-base-content hover:bg-base-200">
            Services
          </Link>
          <Link to="/contact" className="btn btn-ghost rounded-lg text-base-content hover:bg-base-200">
            Contact
          </Link>
          <a 
            href="#get-started" 
            onClick={() => window.location.href = '/generate-resume'}
            className="btn btn-primary ml-4"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 gap-1">
            <li>
              <Link to="/about" className="text-base-content hover:text-primary">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-base-content hover:text-primary">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-base-content hover:text-primary">Contact</Link>
            </li>
            <li>
              <a 
                href="#get-started" 
                onClick={() => window.location.href = '/generate-resume'}
                className="text-primary font-medium"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;