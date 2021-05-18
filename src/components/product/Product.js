import React, { useContext, useState } from "react";
import "./product.scss";
import { CartContext } from "../../contexts/CartContext";
import { SavedContext } from "../../contexts/SavedContext";
import cart from "../../images/white-shopping-cart.svg";
import heart from "../../images/white-heart.svg";
import redHeart from "../../images/red-heart.svg";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToSaved, saved } = useContext(SavedContext);

  const [hover, setHover] = useState(null);

  let onHover = (id) => {
    setHover(id);
  };

  let onOut = () => {
    setHover(null);
  };
  return (
    <div
      className="Product"
      onMouseOver={() => onHover(product._id)}
      onMouseOut={onOut}
    >
      <div className="product-header">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="" />
        </Link>
        <div
          className={
            hover === product._id
              ? `product-buttons show-button d-flex justify-content-center`
              : `product-buttons hidden-button d-flex justify-content-center`
          }
        >
          <button
            onClick={() => {
              addToSaved(product);
            }}
            type="button"
            className="btn btn-primary shadow-none"
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
          <button
            onClick={() => addToCart(product)}
            type="button"
            className="btn btn-primary shadow-none"
          >
            <img src={cart} alt="" />
          </button>
        </div>
      </div>
      <div className="product-details">
        <Link to={`/product/${product._id}`}>
          <p>{product.name}</p>
        </Link>
        <h6>{product.price} EGP</h6>
      </div>
    </div>
  );
};

export default Product;
