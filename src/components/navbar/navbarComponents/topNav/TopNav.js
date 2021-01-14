import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                style={{ backgroundColor: "#152F5F" }}
              >
                Pharmacy Owner?
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Install App <i className="fa fa-android pl-2"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                العربية
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                |
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                <i class="far fa-user pr-2"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
