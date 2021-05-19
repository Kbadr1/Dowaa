import React from "react";
import "./sliderComponent.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from "../../pages/productDetails/ProdutDetails";
import Product from "../product/Product";

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

const SliderComponent = ({ products, product }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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

  return (
    <div className="SliderComponent">
      <Slider {...settings}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
