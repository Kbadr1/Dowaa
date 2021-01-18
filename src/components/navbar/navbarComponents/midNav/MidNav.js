import React from "react";
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
        <div className="form col-lg-4 col-md-6 col-8">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search for any product"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="d-block d-md-none" />
        {/* location 4 columns */}
        <div className="location col-md-3 col-lg-4 col-6">
          <div className="row">
            {/* location name and icons 6 columns */}
            <div className="col-lg-6 col-12 col-md-12  d-flex justify-content-center">
              <div className="row">
                {/*locarion icon 2 columns*/}
                <div className="col-lg-2 col-2 col-md-2 d-flex align-items-center ">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                {/* location name 10 columns */}
                <div className="col-lg-10 col-10 col-md-10">
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
          <button>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <hr className="d-block d-md-none" />
    </div>
  );
};

export default MidNav;
