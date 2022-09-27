import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/AuthActions";
// import "./Header.css";
// import HeaderImage from "../../images/header.svg";

const ProfileContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div
      className="tm-hero d-flex justify-content-center align-items-center"
      data-parallax="scroll"
      data-image-src={require("../../images/hero.jpg")}
    >
      <div className="tm-search-form">
        <h1>
          {user.user.firstname} {user.user.lastname}
        </h1>
        <h3>
          <span>
            <Link to="/" onClick={handleClick}>
              Logout
            </Link>{" "}
            &nbsp;&nbsp;
            <Link to="/upload">Upload</Link>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ProfileContent;
