import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from '../../Images/PawMates.png';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">

          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/ContactPage">
              Contact Us
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/ContactPage">
              Contact Us
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 border">
      <h1>
        <Link to="/">
          <img src= {Logo} alt="logo" width="250" height="100"/>
         
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
