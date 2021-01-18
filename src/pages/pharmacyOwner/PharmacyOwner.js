import React from "react";
import "./pharmacyOwner.css";

const PharmacyOwner = () => {
  return (
    <div className="PharmacyOwner container">
      <div className="row">
        <div className="col-lg-5">
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
        <div className="col-lg-7">
          <form action="">
            <div className="row">
              <div className="col-6">
                <label>
                  Name <br /> <input type="text" placeholder="Ahmed Mohamed" />
                </label>
              </div>
              <div className="col-6">
                <label htmlFor="">
                  Pharmacy Name <br />{" "}
                  <input type="text" placeholder="Dr.Ahmed Pharmacy" />
                </label>
              </div>
              <div className="col-12">
                <label htmlFor="">
                  Pharmacy Adress <br />
                  <input
                    type="text"
                    placeholder="Please Enter Your Pharmacy Adress"
                  />
                </label>
              </div>
              <div className="col-12">
                <label htmlFor="">
                  Phone Number <br />
                  <input type="text" placeholder="01XXXXXXXXX" />
                </label>
              </div>
              <div className="col-12">
                <label htmlFor="">
                  E-mail <br />
                  <input type="email" placeholder="Your@gmail.com" />
                </label>
              </div>
              <div className="col-12">
                <button>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PharmacyOwner;
