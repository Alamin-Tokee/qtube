import React from "react";
import "./Header.css";
// import HeaderImage from "../../images/header.svg";

const Header = () => {
  return (
    // <!--START HEADER SECTION-->

    <div
      className="tm-hero d-flex justify-content-center align-items-center"
      data-parallax="scroll"
      data-image-src={require("../../images/hero.jpg")}
    >
      <form className="d-flex tm-search-form">
        <input
          className="form-control tm-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success tm-search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>

    //<!--END HEADER--> *
  );
};

export default Header;
