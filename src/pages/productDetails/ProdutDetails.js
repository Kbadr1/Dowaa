import React, { useContext, useEffect, useState } from "react";
import "./productDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import brandImage from "../../images/brand.svg";
import stockImage from "../../images/stock.svg";
import heart from "../../images/white-heart.svg";
import redHeart from "../../images/red-heart.svg";

//share buttons
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
} from "react-share";
import { CartContext } from "../../contexts/CartContext";
import { SavedContext } from "../../contexts/SavedContext";
import SliderComponent from "../../components/sliderComponent/SliderComponent";

const ProductDetails = (props) => {
  const { addToCart } = useContext(CartContext);
  const { addToSaved, saved } = useContext(SavedContext);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [brand, setBrand] = useState({});
  const [alsoLikeProducts, setAlsoLikeProducts] = useState([]);
  const [moreFromThisBrand, setMoreFromThisBrand] = useState([]);

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

  const getProductbyBrand = () => {
    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/products/brands?brands=${brand._id}`
      )
      .then((res) => {
        setMoreFromThisBrand(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductbyId();
    getProductbyCategoryForAlsoLike();
    getProductbyBrand();
  }, [props.match.params.product_id, category._id, brand._id]);

  return (
    <div className="ProductDetails">
      <div className="container">
        {/* small nav */}
        <div className="small-nav">
          <Link to="/">Main</Link>
          <i class="fas fa-angle-right"></i>
          <Link to="/all-products">products</Link>
          <i class="fas fa-angle-right"></i>
          <Link to={`/category/${category._id}`}>{category.name}</Link>
          <i class="fas fa-angle-right"></i>
          <span>{product.name}</span>
        </div>
        {/* headr */}
        <div className="header row">
          {/* headr-left */}
          <div className="header-left mt-3 col-md-4">
            <img src={product.image} alt="" />
          </div>
          {/* header-middle */}
          <div className="header-middle mt-3 col-md-5">
            <Link to={`/category/${category._id}`}>
              Show All {category.name} Products{" "}
              <i class="fas fa-angle-right"></i>
            </Link>
            <h6>{product.name}</h6>
            <h5>{product.price} EGP</h5>
            <p>
              <img src={brandImage} alt="" /> Brand:{" "}
              <Link to={`/brand/${brand._id}`}>
                <span>{brand.name}</span>
              </Link>
            </p>
            <hr />
            <p>
              <img src={stockImage} alt="" /> Count in stock:{" "}
              <span>{product.countInStock}</span>
            </p>
            <button
              onClick={() => addToCart(product)}
              type="button"
              class="btn btn-primary add-to-cart shadow-none"
            >
              Add To Cart
            </button>
            <button
              onClick={() => addToSaved(product)}
              type="button"
              class="btn btn-primary add-to-saved shadow-none"
            >
              <img
                src={
                  saved.filter((e) => e._id === product._id).length > 0
                    ? redHeart
                    : heart
                }
                alt=""
              />
            </button>
          </div>
          {/* header-right */}
          <div className="header-right mt-3 col-md-3">
            <div className="row pt-4">
              <div className="col-2">
                <i class="far fa-clock"></i>
              </div>
              <div className="col-10">
                <p>Order is deliverd within 1-2 hours</p>
              </div>
            </div>
            <hr />
            <div className="row pt-3">
              <div className="col-2">
                <i class="fas fa-exclamation-circle"></i>
              </div>
              <div className="col-10">
                <p>
                  Some products are Delivered Within 2 Business Days depending
                  on availability
                </p>
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
          <h4>Product Description</h4>
          <p>{product.richDescription}</p>
        </div>
      </div>
      <div className="more-from-this container">
        <h4>More from {brand.name}</h4>
        <SliderComponent products={moreFromThisBrand} product={product} />
      </div>
      <div className="more-from-this container">
        <h4>You May Also Like</h4>
        <SliderComponent products={alsoLikeProducts} product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
