import React from "react";
import "./pharmacyOwner.scss";

const PharmacyOwner = () => {
  return (
    <div className="PharmacyOwner container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <i class="fas fa-briefcase-medical"></i>
          <h1>Are You A Pharmacy Owner?</h1>
          <p>
            Dowaa app helps customers order all their pharmacy needs;
            pharmaceuticals & non-pharmaceuticals, to be directed to nearest
            pharmacy then delivered to customer, hassle-free.
          </p>
          <p>
            Increase customer base & sales, just fill this form to join dowaa
            and bring your pharmacy to the digital era
          </p>
          <p>For more info, fill the form to contact us</p>
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
              <div class="form-group col-12">
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
