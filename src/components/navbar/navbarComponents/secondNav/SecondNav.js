import React, { useContext } from "react";
import "./secondNav.scss";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import { AuthContext } from "../../../../contexts/AuthContext";
import { ApiContext } from "../../../../contexts/ApiContext";
import logo from "../../../../images/logo.png";
import cart from "../../../../images/shopping-cart.svg";
import heart from "../../../../images/heart.svg";
import phone from "../../../../images/phone.svg";
import { SavedContext } from "../../../../contexts/SavedContext";

const SecondNav = () => {
  const { getCartTotal } = useContext(CartContext);
  const { currentUser, loggedIn, handleLogOut } = useContext(AuthContext);
  const { searchTerm, setSearchTerm } = useContext(ApiContext);
  const { getSavedTotal } = useContext(SavedContext);

  // got to filtered page after pressing enter on search bar
  let history = useHistory();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchTerm == "") {
        history.push("/all-products");
      } else {
        history.push("/filtered");
      }
    }
  };

  return (
    <div className="SecondNav container">
      <div className="row">
        <div className="logo d-none d-lg-block col-lg-2 ">
          <Link to="/">
            <img src={logo} alt="" /> <span>Dowaa</span>
          </Link>
        </div>
        <div className="d-none d-lg-block col-lg-1 phone">
          <Link to="/install-app">
            <img src={phone} alt="" />
          </Link>
        </div>
        <div className="form col-6 col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Search For Any Product"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="input-group-append">
              <Link to={searchTerm == "" ? "/all-products" : "/filtered"}>
                <button
                  className="btn btn-outline-secondary shadow-none"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <div className="row">
            <div className="col-6">
              <div className="dropdown d-flex justify-content-center">
                <button
                  className="btn btn-secondary dropdown-toggle shadow-none"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="far fa-user"></i>
                  {loggedIn ? `${currentUser}` : "Login"}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {!loggedIn ? (
                    <Link className="dropdown-item login" to="/sign-in">
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

                  <div className="dropdown-divider"></div>
                  {!loggedIn ? (
                    <Link className="create dropdown-item" to="/sign-up">
                      Create an account
                    </Link>
                  ) : (
                    ""
                  )}

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/account">
                    <i className="far fa-user"></i> Account
                  </Link>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-inbox"></i> Orders
                  </a>
                </div>
              </div>
            </div>
            <div className="cart col-6 align-items-center d-flex">
              <Link className="nav-link" to="/saved">
                <img className="heart" src={heart} alt="" />
                {getSavedTotal() > 0 ? (
                  <span className="saved-total">{getSavedTotal()}</span>
                ) : (
                  ""
                )}
              </Link>
              <Link className="nav-link" to="/cart">
                <img src={cart} alt="" />
                {getCartTotal() > 0 ? (
                  <span className="cart-total">{getCartTotal()}</span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
