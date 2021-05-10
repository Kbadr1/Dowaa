import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import "./BottomNav.scss";

const BottomNav = () => {
  const { categories } = useContext(CartContext);

  return (
    <div className="BottomNav ">
      <div className="container">
        <ul>
          <li className="sub">
            <span>Sub Categories</span>
          </li>
          {categories.map((category) => (
            <li key={category._id}>
              <Link to={`/${category._id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
