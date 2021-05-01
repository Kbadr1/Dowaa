import React, { useContext, useState } from "react";
import "./signUp.scss";
import signUpImage from "./signup.svg";
import { AuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const {
    handleSignUpSubmit,
    setName,
    setEmail,
    setPassword,
    signupError,
  } = useContext(AuthContext);

  return (
    <div className="SignUp container">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <img src={signUpImage} alt="" />
        </div>
        <div className="col-lg-6">
          <form onSubmit={handleSignUpSubmit}>
            {signupError ? (
              <div className="signup-error">This Email already registered</div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
                minLength="8"
              />
            </div>
            {/* <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div> */}
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
              />
            </div>
            {/* <div className="form-group">
              <label for="exampleInputPassword1">Re-Type Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
