import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../styles/Capture.PNG";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="container">
        <div className="row">
          <div className="logo col-12 col-md-3">
            <img src={logo} alt="" />
            <p>&copy; 2021 Dowaa. All Rights Reserved</p>
          </div>
          <div className="col-6 col-md-3">
            <Link to="/about-us">About Dowaa</Link>
            <br />
            <Link to="/terms-service">Terms & Conditions</Link>
            <br />
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className=" col-6 col-md-3">
            <Link to="/contact-us">Contact Us</Link>
            <br />
            <Link to="/pharmacy-owner">Are You A Pharmacy Owner?</Link>
          </div>
          <div className="follow col-12 col-md-3">
            <p>Follow Us</p>
            <div className="icons row">
              <div className="col-4">
                <a href="https://www.instagram.com" target="_blank">
                  <i style={{ color: "#833AB4" }} class="fab fa-instagram"></i>
                </a>
              </div>
              <div className="col-4">
                <a href="https://twitter.com/" target="_blank">
                  <i style={{ color: "#1DA1F2" }} class="fab fa-twitter"></i>
                </a>
              </div>
              <div className="col-4">
                <a href="https://www.facebook.com" target="_blank">
                  <i style={{ color: "#4267B2" }} class="fab fa-facebook-f"></i>
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
