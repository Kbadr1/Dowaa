import React, { useState } from "react";
import "./draft.scss";
import axios from "axios";

const Draft = () => {
  const [shippingAddress1, setShippingAddress1] = useState("");
  const [shippingAddress2, setShippingAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  const orderData = {
    shippingAddress1: shippingAddress1,
    shippingAddress2: shippingAddress2,
    city: city,
    zip: zip,
    phone: phone,
  };

  const submitOrder = (e) => {
    e.preventDefault();
    axios
      .post(`https://boiling-waters-85095.herokuapp.com/api/orders`, orderData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Draft container">
      <form onSubmit={submitOrder}>
        <input
          type="text"
          placeholder="address 1"
          onChange={(e) => setShippingAddress1(e.target.value)}
        />
        <input
          type="text"
          placeholder="address 2"
          onChange={(e) => setShippingAddress2(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="zip"
          onChange={(e) => setZip(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Draft;
