import React from "react";
import "./AboutUs.scss";
import download from "./download.png";
import mobile from "./mobile.svg";
import pharmacyOwner from "./pharmacyOwner.svg";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      {/* header */}
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h1>Order Online All Your Pharmacy Needs In Egypt.</h1>
              <br />
              <p>
                Order or Schedule all your pharmacy needs; <br /> Prescriptions,
                Non- Prescriptions and Beauty & Wellness Products To Be
                Delivered To Your Doorstep From Nearest Pharmacy
              </p>
              <br />
              <p>Install App Now</p>
              <div className="download">
                <a href="">
                  <img src={download} alt="" />
                </a>

                <br className="d-block d-md-none" />
                <br className="d-block d-md-none" />
                <span>Or</span>
                <br className="d-block d-md-none" />
                <br className="d-block d-md-none" />
                <button>Order Through Website</button>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center">
              <img src={mobile} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="features">
        <div className="container">
          <h1>Chefaa Features</h1>
          <div className="row">
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-comments"></i>
                <br />
                <br />
                <span>24/7 Support</span>
                <br /> <br />
                <p>Reach Out To Us For Help, Suggestions Or Complaints</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-credit-card"></i>
                <br />
                <br />
                <span>Online Payment</span>
                <br /> <br />
                <p>You Can Pay Online Using Credit Card Safely</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-bell"></i>
                <br />
                <br />
                <span>Dosage Reminder</span>
                <br /> <br />
                <p>Remind You When It Is Time To Take Your Dosage</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-truck"></i>
                <br />
                <br />
                <span>Medicine Delivery</span>
                <br /> <br />
                <p>Your Order Is Delivered By The Nearest Pharmacy</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-redo-alt"></i>
                <br />
                <br />
                <span>Refill Prescription</span>
                <br /> <br />
                <p>You Can Refill Your Monthly Prescription</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-percent"></i>
                <br />
                <br />
                <span>Offers & Discounts</span>
                <br /> <br />
                <p>Get All Offers Available On Non-Pharmaceuticals</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-archive"></i>
                <br />
                <br />
                <span>Orders Archive</span>
                <br /> <br />
                <p>An Archive Of All Your Previous Orders</p>
              </div>
            </div>
            <div className="box col-md-6 col-lg-3">
              <div className="box-content box-content-prime col-lg-12">
                <i class="fas fa-award"></i>
                <br />
                <br />
                <span style={{ color: "white" }}>Chefaa Prime</span>
                <br /> <br />
                <p>A New Service To Be Added To Chefaa Features Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pharmacy owner */}
      <div className="owner container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 ">
            <h1>Are You A Pharmacy Owner?</h1>
            <br />
            <br />
            <p>
              Join Chefaa Now! Bring Your Pharmacy To The Digital Era And
              Increase Your Sales. Just Fill This Form
            </p>
            <br />
            <br />
            <button>Join Chefaa Network Of Pharmacies</button>
          </div>
          <div className="col-md-6">
            <img src={pharmacyOwner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
