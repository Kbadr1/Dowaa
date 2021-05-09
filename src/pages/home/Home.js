import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
// sub categories images
import prescriptionIcon from "../../styles/icons/prescrption_icon.png";
import medicine from "../../styles/icons/med_icon.png";
import babyCare from "../../styles/icons/baby-care.png";
import hairCare from "../../styles/icons/hair-care.png";
import medicalSupplies from "../../styles/icons/medical-supplies.png";
import menCare from "../../styles/icons/men-care.png";
import oralCare from "../../styles/icons/oral-care.png";
import organicProducts from "../../styles/icons/organic-products.png";
import protection from "../../styles/icons/protection.png";
import skinCare from "../../styles/icons/skin-care.png";
import womenCare from "../../styles/icons/women-care.png";
// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// mobile image
import mobile from "./mobile.svg";
// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  // slick carousel best selling settings
  const bestSellingSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
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
  // slick carousel settings for new offers
  const newOffersSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
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

  // slick carousel settings for brands
  const brandsSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
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

  return (
    <div className="Home container">
      {/* <div className="row">
        {products.map((product, idx) => (
          <div className="product col-lg-6" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt="" />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div> */}

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
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://chefaa.com/public/uploads/sliders/sDpayAgAHRvDluy1BWDxqNpJEtgxpJnbYaCJJEVI.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
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
                  <img src={prescriptionIcon} alt="" />
                  <Link to="/prescription">Prescription</Link>
                </div>
              </div>
              <div className="presc-med col-6 col-md-4 col-lg-12">
                <div className="presc-med-content col-12">
                  <img src={medicine} alt="" />
                  <Link to="">Medicines</Link>
                </div>
              </div>
              <div className="presc-med col-6 col-md-4 col-lg-12">
                <div className="presc-med-content col-12">
                  <img src={medicine} alt="" />
                  <Link to="">Medicines</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new offers */}
      <div className="new-offers">
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
      </div>
      {/* sub categories */}
      <div className="sub-categories">
        <h4>Sub Categories</h4>
        <div className="row">
          <div className="sub-categ-box col-2 col-md-1">
            <img src={babyCare} alt="" />
            <p>Baby Care</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={womenCare} alt="" />
            <p>Women Care</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={menCare} alt="" />
            <p>Men Care</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={hairCare} alt="" />
            <p>Hair Care</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={skinCare} alt="" />
            <p>Skin Care</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={oralCare} alt="" />
            <p>Oral Care</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={organicProducts} alt="" />
            <p>Organic Products</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={medicalSupplies} alt="" />
            <p>Medical Supplies</p>
          </div>
          <div className="sub-categ-box col-2 col-md-1">
            <img src={protection} alt="" />
            <p>Protection</p>
          </div>
        </div>
      </div>
      {/* best selling products */}
      <div className="best-selling">
        <div className="row">
          <div className="col-6">
            <h4>Best Selling Products</h4>
          </div>
          <div className="col-6">
            <button type="button" class="btn btn-primary float-right">
              Show all <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
        <Slider {...bestSellingSettings}>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
        </Slider>
      </div>
      {/* brands */}
      <div className="brands">
        <div className="row">
          <div className="col-6">
            <h4>Brands</h4>
          </div>
          <div className="col-6">
            <button type="button" class="btn btn-primary float-right">
              Show all <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>

        <Slider {...brandsSettings}>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://chefaa.com/public/uploads/brands/44mGye864S2EUxYA98XeU37sGy3iUTaTMrcquhMP.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
      {/* latest offers */}
      <div className="latest-offers">
        <div className="row">
          <div className="col-6">
            <h4>Latest Offers</h4>
          </div>
          <div className="col-6">
            <button type="button" class="btn btn-primary float-right">
              Show all <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
        <Slider {...bestSellingSettings}>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
          <div class="product">
            <img
              src="https://chefaa.com/public/uploads/products/VCDkt7c25war5HanVsgzyntlZzY5u63xlA9ditUm.png"
              alt="..."
            />
            <div class="prdouct-body">
              <p class="product-name">Sanosan Stretch Mark Cream 100ml</p>
              <h5 class="product-price">100 EGP</h5>
              <button type="button" class="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
        </Slider>
      </div>
      {/* two features */}
      <div className="two-features">
        <div className="row">
          <div className="col-md-6 col-12">
            <img
              src="https://chefaa.com/public/uploads/add/bpwVa75p5uyvozTZ6zHB5K6mGb7dRUEvBcJpuqns.png"
              alt=""
            />
          </div>
          <div className="col-md-6 col-12">
            <img
              src="https://chefaa.com/public/uploads/add/bpwVa75p5uyvozTZ6zHB5K6mGb7dRUEvBcJpuqns.png"
              alt=""
            />
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
