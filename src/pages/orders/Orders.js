import React, { useEffect, useState } from "react";
import "./orders.scss";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import checkImage from "../../images/check.svg";
import notChecked from "../../images/not-checked.svg";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/orders/mine", config)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Orders container">
      <div className="accordion" id="accordionExample">
        {orders.map((order) => (
          <div className="order mb-5" key={order._id}>
            <div className="order-header row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <p>order number:</p>
                    <p>Order placed:</p>
                    <p>status:</p>
                  </div>
                  <div className="col-md-9">
                    <p>#{order._id}</p>
                    <p>
                      {moment(
                        new Date(order.dateOrdered).toLocaleString()
                      ).format(`DD/MM/YYYY hh:mm A`)}
                    </p>
                    <p>{order.status}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 delivery">
                <div className="row d-flex align-items-center delivery-phases">
                  <div className="col-md-4">
                    <img src={checkImage} className="check" alt="" />
                    <br />
                    <span className="horizontal-line">{order.status}</span>
                  </div>
                  <div className="col-md-4">
                    <img src={notChecked} className="check" alt="" />
                    <br />
                    <span className="horizontal-line">Shipped</span>
                  </div>
                  <div className="col-md-4">
                    <img src={notChecked} alt="" />
                    <br />
                    <span>Delivered</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-flex align-items-end justify-content-end">
                <button
                  className="btn btn-primary details-button shadow-none"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collaps${order._id}`}
                  aria-expanded="true"
                  aria-controls={`collaps${order._id}`}
                >
                  Order Details
                </button>
              </div>
            </div>

            <div
              id={`collaps${order._id}`}
              className="collapse"
              data-parent="#accordionExample"
            >
              <div className="order-details row">
                <div className="col-md-5 shipping-details">
                  <h6>Shipping Details</h6>
                  <div className="row">
                    <div className="col-md-4">
                      <p>Governrate:</p>
                      <p>City:</p>
                      <p>Street Name/No: </p>
                      <p>Zip/Postal:</p>
                      <p>Phone Nmber:</p>
                      <p>Shipping Note:</p>
                      <p style={{ fontSize: "12px" }}>Estimated Delivery on:</p>
                    </div>
                    <div className="col-md-8">
                      <p>{order.country}</p>
                      <p>{order.city}</p>
                      <p>{order.shippingAddress1}</p>
                      <p>{order.zip}</p>
                      <p>{order.phone}</p>
                      <p>{order.shippingAddress2}</p>
                      <p style={{ fontSize: "12px" }}>
                        {moment(new Date(order.dateOrdered))
                          .add(1, `hour`)
                          .format(`DD/MM/YYYY hh:mm A`)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <h6>Bill Details</h6>
                  <div className="row bill">
                    <div className="col-md-4">
                      <p>Subtotal:</p>
                      <p>Delivery Fee:</p>
                      <hr className="bill-first-line" />
                      <p>Total:</p>
                    </div>
                    <div className="col-md-8 text-left">
                      <p>{order.totalPrice} EGP</p>
                      <p>15 EGP</p>
                      <hr className="bill-second-line" />
                      <p>{order.totalPrice + 15} EGP</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <h6>Payment Method</h6>
                  <p>Cash On Delivery</p>
                </div>
                <table>
                  <tr>
                    <th>Item Description</th>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                  </tr>
                  {order.orderItems.map((item) => (
                    <tr>
                      <td style={{ width: "70%" }}>
                        <div className="row">
                          <div className="col-md-2">
                            <Link to={`/product/${item.product._id}`}>
                              <img src={item.product.image} alt="" />
                            </Link>
                          </div>
                          <div className="col-md-10 d-flex align-items-center">
                            <Link to={`/product/${item.product._id}`}>
                              {item.product.name}
                            </Link>
                          </div>
                        </div>
                      </td>

                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center">{item.product.price} EGP</td>
                      <td className="text-center">
                        {item.quantity * item.product.price} EGP
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
