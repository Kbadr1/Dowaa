import React, { useContext, useState } from "react";
import "./checkout.scss";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { Redirect, useHistory } from "react-router";

const Checkout = () => {
  const { currentUserId, currentUser, currentUserPhone } =
    useContext(AuthContext);
  const { cart, getTotalSum, setCart } = useContext(CartContext);

  let history = useHistory();
  const checkoutRedirect = () => {
    history.push("/");
  };

  const [shippingAddress1, setShippingAddress1] = useState("");
  const [shippingAddress2, setShippingAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState(currentUserPhone);

  const submitOrder = (e) => {
    let orderItems = [];

    cart.map((product) => {
      orderItems.push({
        product: product._id,
        quantity: product.quantity,
      });
    });

    const orderData = {
      shippingAddress1: shippingAddress1,
      shippingAddress2: shippingAddress2,
      city: city,
      zip: zip,
      phone: phone,
      user: currentUserId,
      orderItems,
      country: country,
    };

    e.preventDefault();
    axios
      .post(`https://boiling-waters-85095.herokuapp.com/api/orders`, orderData)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    setCart([]);
  };

  return (
    <div className="Checkout container">
      <div className="row">
        <div className="customer-info col-lg-7">
          <form class="form-row" onSubmit={submitOrder}>
            <h3 className="col-12">Customer Info</h3>
            <div class="col-6 pb-4">
              <label htmlFor="">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder={currentUser}
                disabled
              />
            </div>
            <div className="col-6 pb-4">
              <label htmlFor="">Phone number</label>
              <input
                type="text"
                class="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="col-4 pb-4">
              <label htmlFor="">Governorate</label>
              <input
                type="text"
                class="form-control"
                placeholder="Cairo"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="col-4 pb-4">
              <label htmlFor="">City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Cairo"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-4 pb-4">
              <label htmlFor="">Zip/Postal</label>
              <input
                type="text"
                class="form-control"
                placeholder="00000"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
            <div className="col-12 pb-4">
              <label htmlFor="">Strret Name/No</label>
              <input
                type="text"
                class="form-control"
                placeholder="123 Example St"
                value={shippingAddress1}
                onChange={(e) => setShippingAddress1(e.target.value)}
                required
              />
            </div>
            <div className="col-12 pb-4">
              <label htmlFor="">Shipping Note</label>
              <textarea
                type="text"
                class="form-control"
                placeholder=""
                value={shippingAddress2}
                onChange={(e) => setShippingAddress2(e.target.value)}
                required
                rows="4"
              />
            </div>

            <h3 className="col-12 pt-3">Payment Info</h3>

            <div className="col-12 pb-4">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                  defaultChecked
                />
                <label class="form-check-label" for="inlineRadio2">
                  Cash on delivery
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  disabled
                />
                <label class="form-check-label" for="inlineRadio3">
                  Credit Card <small>(not available right now)</small>
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary col-4">
              Place Order
            </button>
          </form>
        </div>
        <div className="col-lg-5">
          <div className="current-cart">
            <h3>Order Details</h3>
            {cart.map((product) => (
              <div className="product row">
                <div className="col-6">
                  <p>{product.name}</p>
                  <small>QTY: {product.quantity}</small>
                </div>
                <div className="col-6">
                  <span>{product.price * product.quantity} EGP</span>
                </div>
              </div>
            ))}
            <hr />
            <form className="form-inline d-flex justify-content-center pt-4">
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
            <hr />
            <h6 className="text-center pt-4 pb-3">Total Price</h6>
            <h5 className="text-center">{getTotalSum() + 15} EGP</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
