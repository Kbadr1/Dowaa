import axios from "axios";
import React, { useState } from "react";
import "./contactUs.scss";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const data = {
    name: name,
    email: email,
    message: message,
    phoneNumber: phoneNumber,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    axios
      .post("https://boiling-waters-85095.herokuapp.com/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ContactUs container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <i class="fas fa-hands-helping"></i>
          <h1>Contact Us</h1>
          <p>
            We are constantly working to ease your online experience to order
            your medicine to by-pass the hassle of looking for your medicine
            across pharmacies in egypt. Please reach out to us through this form
            if you have complaints or suggestions to serve you better.
          </p>
        </div>
        <div className="form col-12 col-lg-7">
          <form onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Ahmed Mohamed"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Phone Number</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="01XXXXXXXXX"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputCity">E-Mail</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="your@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label for="inputCity">Your Message</label>
                <textarea
                  required
                  class="form-control"
                  placeholder="Type Your Message Here"
                  rows="6"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div class="form-group"></div>
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
