import React from "react";
import "./signIn.scss";
import signinImage from "./signin.svg";

const SignIn = () => {
  return (
    <div className="SignIn container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
              <a href="" className="float-right">
                Forgot Password
              </a>
            </div>

            <button type="submit" class="btn btn-primary">
              Log in
            </button>
            <div className="text-center">
              <p>or login with</p>
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fab fa-google"></i>
              </a>
            </div>
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
