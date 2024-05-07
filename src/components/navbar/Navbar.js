import React from "react";
import Logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <img className="scale-150" src={Logo} alt="icon" />
        </button>
      </div>
      <div className="flex-1">
        <Link to="/">
          <a
            className="btn btn-ghost normal-case text-xl text-sky-400/100"
            href="#/"
          >
            URLGuardian<span className="text-gray-300">PRO</span>
          </a>
        </Link>
        <Link to="/features">
          <a
            className="btn btn-ghost normal-case text-xl text-sky-400/100"
            href="#/features"
          >
            Documentation
          </a>
        </Link>
        <div className="flex-2"></div>
        <Link to="/about">
          <a
            className="btn btn-ghost normal-case text-xl text-sky-400/100"
            href="#/about"
          >
            About Us
          </a>
        </Link>
        <div className="flex-2"></div>
        <Link to="/dataset">
          <a
            className="btn btn-ghost normal-case text-xl text-sky-400/100"
            href="#/about"
          >
            Dataset
          </a>
        </Link>
        <div className="flex-1"></div>
        <Link to="/login">
          <a
            className="btn btn-ghost normal-case text-xl text-sky-400/100 p-auto"
            href="#/login"
          >
            Login
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
