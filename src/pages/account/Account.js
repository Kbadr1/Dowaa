import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./account.scss";
import userImage from "../../images/user.svg";

const Account = () => {
  const { currentUser, currentUserEmail, currentUserPhone } =
    useContext(AuthContext);

  return (
    <div className="Account container">
      <div className="row">
        <div className="left col-md-4">
          <div className="profile-pic">
            <img src={userImage} alt="" />
          </div>
          <div>
            <h2>{currentUser}</h2>
          </div>
        </div>
        <div className="right col-md-8">
          <h5>Information</h5>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h5>Email</h5>
              <p>{currentUserEmail}</p>
            </div>
            <div className="col-md-6">
              <h5>Phone Number</h5>
              <p>{currentUserPhone}</p>
            </div>
          </div>
          <h5 className="pt-5">Orders</h5>
          <hr />
          <h5>Recent</h5>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Account;
