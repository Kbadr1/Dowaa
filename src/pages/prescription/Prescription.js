import React from "react";
import "./prescription.scss";

const Prescription = () => {
  return (
    <div className="Prescription container">
      <div className="row">
        <div className="col-12 col-lg-7">
          <h3>Prescription</h3>
          <form>
            <div class="form-group upload">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                />
                <a>
                  <i class="far fa-image"></i>Upload Prescription Or The Product
                  You Need
                </a>
              </label>
            </div>
            <h6 className="or">
              <span>or</span>
            </h6>
            <h6 style={{ marginTop: "30px" }}>Type Your Order</h6>
            <div class="form-group">
              <label
                for="exampleFormControlTextarea1"
                style={{ fontWeight: 300, fontSize: "14px" }}
              >
                Type Name of Medicine Or Product You Need From Pharmacy
              </label>
              <textarea
                style={{
                  backgroundColor: "#F7F7F7",
                  fontSize: "14px",
                  fontWeight: 300,
                }}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="EX: Panadol"
              ></textarea>
            </div>
            <button type="button" class="submit btn btn-primary">
              Submit Order
            </button>
          </form>
        </div>

        <div className="right d-none d-lg-block offset-lg-1 col-lg-4">
          <h5>How To Order A Prescription</h5>

          <div className="row">
            <div className="box" style={{ paddingBottom: "30px" }}>
              <h5>
                <span>1.</span> Upload Prescription
              </h5>
              <p>
                Upload Photo of Your Prescription Or Type The Product you Need
                From The Pharmacy
              </p>
            </div>

            <div className="box">
              <h5>
                <span>2.</span> Order Fulfillment
              </h5>
              <p>
                Chefaa App Directs Your Order Across Pharmacies Near Your
                Location Until Fulfilled, Hassle-Free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
