import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer container">
      <div className="row">
        <div className="logo col-lg-3">
          <h2>LOGO</h2>
          <p>&copy; 2021 Chefaa. All Rights Reserved</p>
        </div>
        <div className="col-lg-3">
          <a href="">About Chefaa</a>
          <br />
          <a href="">Blog</a>
          <br />
          <a href="">Are You A Pharmacy Owner?</a>
        </div>
        <div className="col-lg-3">
          <a href="">Privacy Policy</a>
          <br />
          <a href="">Contact Us</a>
          <br />
          <a href="">Terms & Conditions</a>
        </div>
        <div className="follow col-lg-3">
          <p>Follow Us</p>
          <div className="row">
            <div className="col-4">
              <i class="fab fa-instagram-square"></i>
            </div>
            <div className="col-4">
              <i class="fab fa-twitter-square"></i>
            </div>
            <div className="col-4">
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
