import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="container">
        <div className="row">
          <div className="logo col-12 col-md-3">
            <h2>LOGO</h2>
            <p>&copy; 2021 Chefaa. All Rights Reserved</p>
          </div>
          <div className="col-6 col-md-3">
            <Link to="/about-us">About Chefaa</Link>
            <br />
            <Link to="">Blog</Link>
            <br />
            <Link to="/pharmacy-owner">Are You A Pharmacy Owner?</Link>
          </div>
          <div className=" col-6 col-md-3">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <br />
            <Link to="/contact-us">Contact Us</Link>
            <br />
            <Link to="/terms-service">Terms & Conditions</Link>
          </div>
          <div className="follow col-12 col-md-3">
            <p>Follow Us</p>
            <div className="icons row">
              <div className="col-4">
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div className="col-4">
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
              <div className="col-4">
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
