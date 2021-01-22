import React from "react";
import "./contactUs.scss";

const ContactUs = () => {
  return (
    <div className="ContactUs container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <i class="fas fa-hands-helping"></i>
          <h1>Contact Us</h1>
          <p>
            We Are Constantly Working to Ease Your Online Experience To Order
            Your Medicine To By-Pass The Hassle Of Looking For Your Medicine
            Across Pharmacies In Egypt. Please Reach Out To Us Through This Form
            If You Have Complaints Or Suggestions To Serve You Better.
          </p>
        </div>
        <div className="form col-12 col-lg-7">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Ahmed Mohamed"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Phone Number</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="01XXXXXXXXX"
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
