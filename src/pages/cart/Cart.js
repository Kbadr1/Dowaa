import React, { useContext } from "react";
import "./cart.scss";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import cartImage from "../../images/empty-cart.svg";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalSum, setQuantity } =
    useContext(CartContext);

  return (
    <div className="Cart container">
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-6">
                <h3>Shopping Cart</h3>
              </div>
              <div className="col-6">
                <Link to="/">
                  <button
                    type="button"
                    class="btn btn-primary shadow-none continue "
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="shipment col-12">
                <h5>Shipment 1 From 1</h5>
                <h6 className="delivered-within">Delivered within 1-2 hours</h6>
                {cart.map((product) => (
                  <div className="product row" key={product._id}>
                    <div className="col-2">
                      <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt="" />
                      </Link>
                    </div>
                    <div className="col-5">
                      <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </div>
                    <div className="col-2">
                      <div className="quantity">
                        <button
                          className="quantity-button"
                          onClick={() =>
                            setQuantity(product, product.quantity + 1)
                          }
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                        <input
                          disabled
                          value={product.quantity}
                          onChange={(e) =>
                            setQuantity(product, parseInt(e.target.value))
                          }
                        />
                        <button
                          className="quantity-button"
                          onClick={
                            product.quantity >= 2
                              ? () => setQuantity(product, product.quantity - 1)
                              : ""
                          }
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-2">
                      {product.price * product.quantity} EGP
                    </div>
                    <div className="col-1">
                      <button
                        className="remove-item"
                        onClick={() => removeFromCart(product)}
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <hr />
                  </div>
                ))}
                <hr />
                <p>
                  Shipment subtotal <span>{getTotalSum()} EGP</span>
                </p>
                <p>
                  Delivery Fees <span>15 EGP</span>
                </p>
                <hr />
                <p className="total">
                  Total shipment 1 <span>{getTotalSum() + 15} EGP</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-shipment">
              <form className="form-inline">
                <button type="button" class="btn btn-primary shadow-none apply">
                  Apply
                </button>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type coupon here"
                  />
                </div>
              </form>
              <p>
                Total shipment 1 <span>{getTotalSum() + 15} EGP</span>
              </p>
              <hr />
              <p className="total">
                Total <span>{getTotalSum() + 15} EGP</span>
              </p>
              <Link to="/checkout">
                <button
                  type="button"
                  class="btn btn-primary shadow-none checkout"
                >
                  Go to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart d-flex align-items-center justify-content-center">
          <div>
            <div className="cart-image">
              <img src={cartImage} alt="" />
            </div>
            <h4>Shopping Cart Is Empty</h4>
            <Link to="/">
              <button type="button" className="btn btn-primary shadow-none">
                Start Shopping Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
