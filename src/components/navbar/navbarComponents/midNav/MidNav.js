import React, { useState } from "react";
import "./MidNav.css";

const MidNav = () => {
  return (
    <div className="MidNav container">
      <div className="row">
        {/* LOGO and ICON are 2 columns */}
        <div className="logo col-4 col-md-2 d-flex align-items-center justify-content-center">
          ICON + LOGO
        </div>
        {/* search form 4 columns */}
        <div className="form col-8 col-md-5">
          <form action="">
            <input type="text" placeholder="Search for any product" />
            <button className="d-none d-lg-block d-xl-block ">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        {/* location 4 columns */}
        <div className="location col-6 col-md-4">
          <div className="row">
            {/* location name and icons 6 columns */}
            <div className="col-12 col-md-12 col-lg-6 justify-content-center">
              <div className="row">
                {/*locarion icon 2 columns*/}
                <div className="col-2 col-md-2 d-flex align-items-center ">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                {/* location name 10 columns */}
                <div className=" col-10 col-md-10">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <span>Your Location</span>
                    </div>
                    <div className="col-12 col-md-12">Unspecified</div>
                  </div>
                </div>
              </div>
            </div>
            {/* location button 6 columns */}
            <div className="col-md-6 d-flex align-items-center">
              <button>Change Location</button>
            </div>
          </div>
        </div>
        {/* shopping cart 2 columns*/}
        <div className="cart col-6 col-md-1 d-flex align-items-center">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
};

export default MidNav;
