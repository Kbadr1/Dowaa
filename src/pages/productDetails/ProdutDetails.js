import React, { useContext, useEffect, useState } from "react";
import "./productDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";
//share buttons
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
} from "react-share";
// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../../contexts/CartContext";
import { SavedContext } from "../../contexts/SavedContext";

const ProductDetails = (props) => {
  const { addToCart } = useContext(CartContext);
  const { addToSaved } = useContext(SavedContext);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [brand, setBrand] = useState({});
  const [alsoLikeProducts, setAlsoLikeProducts] = useState([]);
  const alsoLikeSettings = {
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

  const getProductbyId = () => {
    let productId = props.match.params.product_id;
    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/products/${productId}`
      )
      .then((res) => {
        setProduct(res.data);
        setCategory(res.data.category);
        setBrand(res.data.brand);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProductbyCategoryForAlsoLike = () => {
    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/products?categories=${category._id}`
      )
      .then((res) => {
        setAlsoLikeProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductbyId();
    getProductbyCategoryForAlsoLike();
  }, [props.match.params.product_id, category._id]);

  return (
    <div className="ProductDetails">
      <div className="container">
        <div className="small-nav">
          <Link to="/">Main</Link>
          <i class="fas fa-angle-right"></i>
          <Link to="/all-products">products</Link>
          <i class="fas fa-angle-right"></i>
          <Link to={`/category/${category._id}`}>{category.name}</Link>
          <i class="fas fa-angle-right"></i>
          <span>{product.name}</span>
        </div>
        <div className="header row">
          <div className="header-left mt-3 col-md-4">
            <img src={product.image} alt="" />
          </div>
          <div className="header-middle mt-3 col-md-5">
            <Link to={`/category/${category._id}`}>
              Show All {category.name} Products{" "}
              <i class="fas fa-angle-right"></i>
            </Link>
            <h6>{product.name}</h6>
            <h5>{product.price} EGP</h5>
            <p>
              <i class="fas fa-store brand-count"></i> Brand:{" "}
              <Link to={`/brand/${brand._id}`}>
                <span>{brand.name}</span>
              </Link>
            </p>
            <hr />
            <p>
              <i class="fas fa-box-open brand-count"></i> Count in stock:{" "}
              <span>{product.countInStock}</span>
            </p>
            <button
              onClick={() => addToCart(product)}
              type="button"
              class="btn btn-primary add-to-cart"
            >
              Add To Cart
            </button>
            <button
              onClick={() => addToSaved(product)}
              type="button"
              class="btn btn-primary add-to-saved"
            >
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <div className="header-right mt-3 col-md-3">
            <div className="row pt-4">
              <div className="col-2">
                <i class="far fa-clock"></i>
              </div>
              <div className="col-10">
                <p>Order is deliverd within 5 Business days</p>
              </div>
            </div>
            <hr />
            <div className="row pt-3">
              <div className="col-2">
                <i class="fas fa-exclamation-circle"></i>
              </div>
              <div className="col-10">
                <p>Products Prices & Availability Varies Per Area</p>
              </div>
            </div>

            <hr />

            <div className="share pt-3">
              <h6>Share</h6>
              <FacebookShareButton url={"https://www.Dowaa.com/"}>
                <i
                  style={{ color: "#4267B2", borderColor: "#4267B2" }}
                  class="fab fa-facebook-f"
                ></i>
              </FacebookShareButton>
              <TwitterShareButton url={"https://www.Dowaa.com/"}>
                <i
                  style={{ color: "#1DA1F2", borderColor: "#1DA1F2" }}
                  class="fab fa-twitter"
                ></i>
              </TwitterShareButton>
              <FacebookMessengerShareButton url={"https://www.Dowaa.com/"}>
                <i
                  style={{ color: "#0078FF", borderColor: "#0078FF" }}
                  class="fab fa-facebook-messenger"
                ></i>
              </FacebookMessengerShareButton>
              <WhatsappShareButton url={"https://www.Dowaa.com/"}>
                <i
                  style={{ color: "#4AC959", borderColor: "#4AC959" }}
                  class="fab fa-whatsapp"
                ></i>
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
      <div className="order-description">
        <div className="container">
          <h4>Order Description</h4>
          <p>{product.richDescription}</p>
        </div>
      </div>
      <div className="also-like container">
        <h4>You May Also Like</h4>
        <Slider {...alsoLikeSettings}>
          {alsoLikeProducts.map((product) => (
            <div class="product" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt="..." />
              </Link>
              <div class="prdouct-body">
                <Link to={`/product/${product._id}`}>
                  <p class="product-name">{product.name}</p>
                </Link>
                <h5 class="product-price">{product.price} EGP</h5>
                <button
                  onClick={() => addToCart(product)}
                  type="button"
                  class="btn btn-primary add-to-cart"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => addToSaved(product)}
                  type="button"
                  class="btn btn-primary add-to-saved"
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetails;
