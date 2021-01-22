import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/pharmacy-owner">
                Pharmacy Owner?
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Install App <i className="fa fa-android pl-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                العربية <span className="d-none d-lg-inline-block">|</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <i className="far fa-user pr-2"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
