import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import React, { lazy, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../components/Auth/Auth';

const SignOut = lazy(() => import("../../pages/SignOut"));

const Nav = () => {

  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <div>
      {user ? (
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
                <li className="signout">
                  <SignOut/>
                </li>
              </ul>
            </nav>
          </>
      ) : (
        <>
        <nav>
          <ul className="navbar shadow-md w-full">
            <li className="signup">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="signin">
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>
      </>
      )}
    </div>
  );
};

Nav.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Nav;
