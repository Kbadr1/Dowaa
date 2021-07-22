import React, { useContext, useEffect, useState } from "react";
import "./home.scss";
import SliderComponent from "../../components/sliderComponent/SliderComponent";
import { Link } from "react-router-dom";
import productsImage from "../../images/products.svg";
import medicineImage from "../../images/medicine.svg";
import prescriptionImage from "../../images/prescription.svg";
import mobile from "../../images/downlaod-mobile.svg";
// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ApiContext } from "../../contexts/ApiContext";

const Home = () => {
  const { brands, categories, products } = useContext(ApiContext);
  // slick carousel settings for new offers
  // const newOffersSettings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   swipeToSlide: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  // slick carousel settings for brands
  const brandsSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { style, onClick } = props;
    return (
      <div style={{ ...style, display: "block" }} onClick={onClick}>
        <i class="fas fa-chevron-right slick-arrow-icon-right"></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div style={{ ...style, display: "block" }} onClick={onClick}>
        <i class="fas fa-chevron-left slick-arrow-icon-left"></i>
      </div>
    );
  }

  return (
    <div className="Home container">
      {/* header */}
      <div className="header">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                {/* <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li> */}
                {/* <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li> */}
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Link to="/brand/60e2fcd2df7f19001546d65c">
                    <img
                      src="https://cdn.chefaa.com/filters:format(webp)/fit-in/1650x686/public/uploads/sliders/ZZtWzbYdLO2IXOHgvDFqSM3JX5ZEHqPlzZIoWXQ3.jpeg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>
                <div class="carousel-item">
                  <Link to="/brand/60e301a3df7f19001546d666">
                    <img
                      src="https://cdn.chefaa.com/filters:format(webp)/fit-in/1650x686/public/uploads/sliders/xQ2lwBIJvT0msq1awdNXN5ZGH1O5fu4g0Nt5FSqH.jpeg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>
                <div class="carousel-item">
                  <Link to="/product/60e30413df7f19001546d66f">
                    <img
                      src="https://cdn.chefaa.com/filters:format(webp)/fit-in/1650x686/public/uploads/sliders/B3pOjHsxxnoumPap7fgyDUy6zzQEd9e6TgVvcauD.jpeg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>

                <div class="carousel-item">
                  <Link to="/brand/60e3055adf7f19001546d670">
                    <img
                      src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="presc-med col-6 col-md-4 col-lg-12">
                <div className="presc-med-content col-12">
                  <img src={prescriptionImage} alt="" />
                  <Link to="/prescription">Prescription</Link>
                </div>
              </div>
              <div className="presc-med col-6 col-md-4 col-lg-12">
                <div className="presc-med-content col-12">
                  <img src={medicineImage} alt="" />
                  <Link to="/category/60a373f6f9effb0015c75b55">Medicines</Link>
                </div>
              </div>
              <div className="presc-med col-6 col-md-4 col-lg-12">
                <div className="presc-med-content col-12">
                  <img src={productsImage} alt="" />
                  <Link to="/all-products">All Products</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new offers */}
      {/* <div className="new-offers">
        <h4>New Offers</h4>
        <Slider {...newOffersSettings}>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/landing_pages/MXP1gj8gsty4mfNXupK4IzBRqgzaIkokuw18CVvS.jpeg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/landing_pages/MXP1gj8gsty4mfNXupK4IzBRqgzaIkokuw18CVvS.jpeg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/landing_pages/MXP1gj8gsty4mfNXupK4IzBRqgzaIkokuw18CVvS.jpeg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/landing_pages/MXP1gj8gsty4mfNXupK4IzBRqgzaIkokuw18CVvS.jpeg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/landing_pages/MXP1gj8gsty4mfNXupK4IzBRqgzaIkokuw18CVvS.jpeg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/landing_pages/MXP1gj8gsty4mfNXupK4IzBRqgzaIkokuw18CVvS.jpeg"
              alt=""
            />
          </div>
        </Slider>
      </div> */}
      {/* sub categories */}
      <div className="sub-categories">
        <h4>Categories</h4>
        <div className="row">
          {categories.slice(0, 9).map((category) => (
            <div key={category._id} className="sub-categ-box col-2 col-md-1">
              <Link to={`/category/${category._id}`}>
                <img src={category.image} alt="" />
              </Link>
              <Link to={`/category/${category._id}`}>
                <p>{category.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* best selling products */}
      <div className="best-selling">
        <div className="row">
          <div className="col-6">
            <h4>Best Selling Products</h4>
          </div>
          <div className="col-6">
            <Link to="/all-products">
              <button
                type="button"
                class="btn btn-primary show-all float-right"
              >
                Show all <i class="fas fa-angle-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <SliderComponent products={products} />
      </div>
      {/* brands */}
      <div className="brands">
        <div className="row">
          <div className="col-6">
            <h4>Brands</h4>
          </div>
          <div className="col-6">
            <Link to="/all-brands">
              <button type="button" class="btn btn-primary float-right">
                Show all <i class="fas fa-angle-right"></i>
              </button>
            </Link>
          </div>
        </div>

        <Slider {...brandsSettings}>
          {brands.map((brand) => (
            <div className="slide">
              <Link to={`/brand/${brand._id}`}>
                <img src={brand.image} alt="" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      {/* two features */}
      <div className="two-features">
        <div className="row">
          <div className="col-md-6 col-12">
            <Link to="/category/609f479cddd57f0015b6962c">
              <img
                src="https://cdn.chefaa.com/filters:format(webp)/fit-in/1110x534/public/uploads/add/Gqi89FNbxycgIADvSmUgFFMJFj2ZlcOk65xppWOQ.png"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-6 col-12">
            <Link to="/category/609f479bddd57f0015b6962a">
              <img
                src="https://cdn.chefaa.com/filters:format(webp)/fit-in/1110x534/public/uploads/add/YhwA76WNzAwm86uzm5Tvdlcdozg82jQztLBTBcv2.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      {/* latest offers */}
      <div className="latest-offers">
        <div className="row">
          <div className="col-6">
            <h4>Latest Offers</h4>
          </div>
          <div className="col-6">
            <Link to="/all-products">
              <button
                type="button"
                class="btn btn-primary show-all float-right"
              >
                Show all <i class="fas fa-angle-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <SliderComponent products={products} />
      </div>
      {/* two features */}
      <div className="two-features">
        <div className="row">
          <div className="col-md-6 col-12">
            <Link to="/category/609f4798ddd57f0015b69627">
              <img
                src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/add/GHexuBiyCUSfxC33QSz58BhKab94Bm5QiVAmLzzr.png"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-6 col-12">
            <Link to="/category/609f4799ddd57f0015b69628">
              <img
                src="https://cdn.chefaa.com/filters:format(webp)/public/uploads/add/bpwVa75p5uyvozTZ6zHB5K6mGb7dRUEvBcJpuqns.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      {/* download app */}
      <div className="download container">
        <div className="row d-flex align-items-center">
          <div className="p-5 col-md-12 col-lg-6">
            <h4>Download Dowaa Now!</h4>
            <br />
            <p>
              Order or Schedule all your pharmacy needs; <br /> Prescriptions,
              Non- Prescriptions and Beauty & Wellness Products To Be Delivered
              To Your Doorstep From Nearest Pharmacy
            </p>
            <button type="button" class="btn btn-primary">
              Download App
            </button>
          </div>
          <div className="pt-5 col-md-12 col-lg-6 d-flex justify-content-center">
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
