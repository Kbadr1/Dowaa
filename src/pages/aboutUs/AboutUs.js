import React from "react";
import "./AboutUs.css";
import mobileImage from "./header-mobile-image.png";
import download from "./download.png";
import CarouselBox from "./carousel-box.png";
import CarouselMedc from "./carousel-medc.png";
import CarouselStore from "./carousel-store.png";
import CarouselPre from "./carousel-pre.png";
import Owner from "./owner.png";

const AboutUs = () => {
  return (
    <div className="About Us">
      {/* header */}
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Order Online All Your Pharmacy Needs In Egypt.</h3>
              <br />
              <h6>
                Order or Schedule all your pharmacy needs; <br /> Prescriptions,
                Non- Prescriptions and Beauty & Wellness Products To Be
                Delivered To Your Doorstep From Nearest Pharmacy
              </h6>
              <br />
              <p>Install App Now</p>
              <div className="download">
                <a href="">
                  <img src={download} alt="" />
                </a>
              </div>
              <br />
              <span>Or</span> <button>Order Through Website</button>
            </div>
            <div className="col-lg-6">
              <img src={mobileImage} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <h1>Chefaa Features</h1>
          <div className="row">
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-comments"></i>
                <br />
                <br />
                <span>24/7 Support</span>
                <br /> <br />
                <p>Reach Out To Us For Help, Suggestions Or Complaints</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-credit-card"></i>
                <br />
                <br />
                <span>Online Payment</span>
                <br /> <br />
                <p>You Can Pay Online Using Credit Card Safely</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-bell"></i>
                <br />
                <br />
                <span>Dosage Reminder</span>
                <br /> <br />
                <p>Remind You When It Is Time To Take Your Dosage</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="fas fa-truck"></i>
                <br />
                <br />
                <span>Medicine Delivery</span>
                <br /> <br />
                <p>Your Order Is Delivered By The Nearest Pharmacy</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-comments"></i>
                <br />
                <br />
                <span>Refill Prescription</span>
                <br /> <br />
                <p>You Can Refill Your Monthly Prescription</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-comments"></i>
                <br />
                <br />
                <span>Offers & Discounts</span>
                <br /> <br />
                <p>Get All Offers Available On Non-Pharmaceuticals</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content col-lg-12">
                <i class="far fa-comments"></i>
                <br />
                <br />
                <span>Orders Archive</span>
                <br /> <br />
                <p>An Archive Of All Your Previous Orders</p>
              </div>
            </div>
            <div className="box col-lg-3">
              <div className="box-content box-content-prime col-lg-12">
                <i class="far fa-comments"></i>
                <br />
                <br />
                <span>Chefaa Prime</span>
                <br /> <br />
                <p>A New Service To Be Added To Chefaa Features Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        class="carousel slide container"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>

          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row">
              <div className="col-lg-6">
                <img src={CarouselBox} class="d-block w-100" alt="..." />
              </div>
              <div className="col-lg-6">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Chefaa Box</h5>
                  <p>
                    Chefaa Box is a variety of the best products collected
                    together to suit your personal care needs at best price
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-lg-6">
                <img src={CarouselMedc} class="d-block w-100" alt="..." />
              </div>
              <div className="col-lg-6">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Order Medicines Online</h5>
                  <p>
                    Now, you can order online any medicine you need from the
                    nearest pharmacy to you in Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-lg-6">
                <img src={CarouselPre} class="d-block w-100" alt="..." />
              </div>
              <div className="col-lg-6">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Prescription</h5>
                  <p>
                    To order your medicine from any pharmacy online in egypt ,
                    upload a photo of the prescription or medicine, and specify
                    your location.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-lg-6">
                <img src={CarouselStore} class="d-block w-100" alt="..." />
              </div>
              <div className="col-lg-6">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Chefaa Store</h5>
                  <p>
                    Get All Your Non-Prescriptions and Beauty & Wellness
                    Products At A Competitive Prices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pharmacy owner */}
      <div className="owner container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 ">
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
          <div className="col-lg-6">
            <img src={Owner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
