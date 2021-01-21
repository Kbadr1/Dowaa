import React from "react";
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
            <a href="">About Chefaa</a>
            <br />
            <a href="">Blog</a>
            <br />
            <a href="">Are You A Pharmacy Owner?</a>
          </div>
          <div className=" col-6 col-md-3">
            <a href="">Privacy Policy</a>
            <br />
            <a href="">Contact Us</a>
            <br />
            <a href="">Terms & Conditions</a>
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
