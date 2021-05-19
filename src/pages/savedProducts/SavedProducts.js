import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";
import "./savedProducts.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import brandImage from "../../images/brand.svg";
import stockImage from "../../images/stock.svg";

const SavedProducts = () => {
  const { saved, removeFromSaved } = useContext(SavedContext);
  const { addToCart } = useContext(CartContext);

  console.log(saved);

  return (
    <div className="SavedProducts container">
      {saved.length > 0 ? (
        <div>
          <div className="small-nav">
            <Link to="/">Main</Link>
            <i class="fas fa-angle-right"></i>
            <span>Favourite Products</span>
          </div>
          <h3>Saved products</h3>
          <div>
            <div className="row">
              {saved.map((product) => (
                <div key={product._id} className="col-lg-6 col-12 ">
                  <div className="saved-product">
                    <div className="row">
                      <div className="col-6">
                        <Link to={`/product/${product._id}`}>
                          <img src={product.image} alt="" />
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link to={`/product/${product._id}`}>
                          <h6>{product.name}</h6>
                        </Link>
                        <h5>{product.price} EGP</h5>
                        <p>
                          <img src={brandImage} alt="" className="icon-image" />{" "}
                          Seller:{" "}
                          <Link to={`/brand/${product.brand._id}`}>
                            <span>{product.brand.name}</span>
                          </Link>
                        </p>
                        <p>
                          {" "}
                          <img
                            src={stockImage}
                            alt=""
                            className="icon-image"
                          />{" "}
                          Count in stock: <span>{product.countInStock}</span>
                        </p>
                        <button
                          onClick={() => addToCart(product)}
                          type="button"
                          class="btn btn-primary shadow-none"
                        >
                          Add to cart
                        </button>
                        <button
                          onClick={() => removeFromSaved(product)}
                          type="button"
                          class="btn btn-primary shadow-none"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-saved d-flex align-items-center justify-content-center">
          <div>
            <div className="saved-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h5>No Favourites Listed Yet</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedProducts;
