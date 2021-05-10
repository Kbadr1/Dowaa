import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import "./account.scss";
import femaleUser from "./female-user-img.png";
import maleUser from "./male-user-img.png";

const Account = () => {
  const {
    loggedIn,
    currentUser,
    currentUserEmail,
    currentUserGendre,
    currentUserPhone,
  } = useContext(AuthContext);

  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (currentUserGendre === "male") {
      setProfilePic(maleUser);
    } else {
      setProfilePic(femaleUser);
    }
  }, []);

  if (!loggedIn) {
    return <Redirect to={"/sign-in"} />;
  }

  return (
    <div className="Account container">
      <div className="row">
        <div className="left col-lg-4">
          <div className="profile-pic">
            <img src={profilePic} alt="" />
          </div>
          <div>
            <h2>{currentUser}</h2>
          </div>
        </div>
        <div className="right col-lg-8">
          <h5>Information</h5>
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <h5>Email</h5>
              <p>{currentUserEmail}</p>
            </div>
            <div className="col-lg-6">
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
