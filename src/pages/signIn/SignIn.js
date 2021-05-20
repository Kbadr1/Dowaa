import React, { useContext, useState } from "react";
import "./signIn.scss";
import signinImage from "../../images/sign-in.svg";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
  const { handleLogInSubmit, setEmail, setPassword, loginError } =
    useContext(AuthContext);

  return (
    <div className="SignIn container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <form onSubmit={handleLogInSubmit}>
            {loginError ? (
              <div className="login-error">Wrong Email or Password !</div>
            ) : (
              ""
            )}
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
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div id="validationServer03Feedback" class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
              <a href="" className="float-right">
                Forgot Password
              </a>
            </div>

            <button
              // onClick={() => history.push("/")}
              type="submit"
              className="btn btn-primary"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="col-lg-7 d-flex p-4">
          <img className=" d-none d-lg-block" src={signinImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
