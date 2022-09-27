import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  //show/hide nav menu
  const user = useSelector((state) => state.authReducer.authData);
  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <i className="fas fa-film mr-2"></i> */}
          Qtube
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link nav-link-1 active"
                aria-current="page"
                to="/"
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-2" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-3" to="/contact">
                Contact
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-4"
                  to={`/profile/${user.user._id}`}
                >
                  {user.user.firstname}
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link nav-link-4" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
