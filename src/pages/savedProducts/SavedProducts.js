import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";
import "./savedProducts.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

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
          <div>
            {saved.map((product) => (
              <div key={product._id} className="row saved-product">
                <div className="col-3">
                  <img src={product.image} alt="" />
                </div>
                <div className="col-6">
                  <h6>{product.name}</h6>
                  <h5>{product.price} EGP</h5>
                  <p>
                    <i class="fas fa-store brand-count"></i> Seller:{" "}
                    {product.brand}
                  </p>
                  <p>
                    {" "}
                    <i class="fas fa-box-open brand-count"></i> Count in stock:{" "}
                    <span>{product.countInStock}</span>
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => removeFromSaved(product)}
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            ))}
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
