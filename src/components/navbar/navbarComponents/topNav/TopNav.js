import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";
import logo from "../../../../styles/logo.png";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand d-lg-none" to="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          <span className="logo">Dowaa</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="activePage"
                className="nav-link"
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activePage"
                className="nav-link"
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="activePage"
                className="nav-link"
                to="/pharmacy-owner"
              >
                Pharmacy Owner?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activePage"
                className="nav-link"
                to="/install-app"
              >
                Install App
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
