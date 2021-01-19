import React from "react";
import "./pharmacyOwner.css";

const PharmacyOwner = () => {
  return (
    <div className="PharmacyOwner container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <i class="fas fa-briefcase-medical"></i>
          <h3>Are You A Pharmacy Owner?</h3>
          <p>
            Chefaa App Helps Customers Order All Their Pharmacy Needs;
            Pharmaceuticals & Non-Pharmaceuticals, To Be Directed To Nearest
            Pharmacy Then Delivered To Customer, Hassle-Free.
          </p>
          <p>
            Increase Customer Base & Sales, Just Fill This Form To Join Chefaa
            and Bring Your Pharmacy To The Digital Era
          </p>
          <p>For More Info, Fill The Form To Contact Us</p>
        </div>
        <div className="form col-12 col-lg-7">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ahmed Mohamed"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Pharmacy Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Dr.Ahmed Pharmacy"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Pharmacy Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Please Enter Your Pharmacy Adress"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="01XXXXXXXXX"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">E-Mail</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="your@gmail.com"
                />
              </div>
            </div>
            <div class="form-group"></div>
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PharmacyOwner;
