import React, { useContext, useEffect, useState } from "react";
import "./secondNav.scss";
import { Link } from "react-router-dom";

import { CartContext } from "../../../../contexts/CartContext";
import logo from "../../../../styles/logo.png";

import { AuthContext } from "../../../../contexts/AuthContext";

const SecondNav = () => {
  const { getCartTotal } = useContext(CartContext);
  const { user, loggedIn, handleLogOut, setLoggedIn } = useContext(AuthContext);

  return (
    <div className="SecondNav container">
      <div className="row">
        <div className="logo d-none d-lg-block col-lg-3">
          <Link to="/">
            <img src={logo} alt="" /> <span>Dowaa</span>
          </Link>
        </div>
        <div className="form col-6 col-md-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search For Any Product"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <div className="row">
            <div className="col-6">
              <div class="dropdown d-flex justify-content-center">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="far fa-user"></i>
                  {user ? `${user}` : "Login"}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {!loggedIn ? (
                    <Link class="dropdown-item login" to="/sign-in">
                      LOGIN
                    </Link>
                  ) : (
                    <button
                      onClick={handleLogOut}
                      className="dropdown-item login"
                    >
                      Log out
                    </button>
                  )}

                  <div class="dropdown-divider"></div>
                  {!loggedIn ? (
                    <Link class="create dropdown-item" to="/sign-up">
                      CREATE AN ACCOUNT
                    </Link>
                  ) : (
                    ""
                  )}

                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    <i class="far fa-user"></i> Account
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-inbox"></i> Orders
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="far fa-heart"></i> Saved Items
                  </a>
                </div>
              </div>
            </div>
            <div className="cart col-6">
              <Link class="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {getCartTotal()} <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
