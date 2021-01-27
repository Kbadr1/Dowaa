import React from "react";
import "./signUp.scss";
import signUpImage from "./signup.svg";
const SignUp = () => {
  return (
    <div className="SignUp container">
      <div className="row">
        <div className="col-lg-6 d-flex">
          <img src={signUpImage} alt="" />
        </div>
        <div className="col-lg-6">
          <form>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Re-Type Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Create New Account
            </button>
            <div className="text-center">
              <p>or register with</p>
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
