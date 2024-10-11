import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="navbar shadow-md w-full">
          <li className="user">
            <Link to="/about">About</Link>
          </li>
          <li className="user">
            <Link to="/">Products</Link>
          </li>
          <li className="user">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="user">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="admin">
            <Link to="/admin">Admin</Link>
          </li>
          <li className="signup">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="signin">
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

Nav.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Nav;
