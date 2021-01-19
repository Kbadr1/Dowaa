import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="BottomNav ">
      <div className="container">
        <ul>
          <li className="sub">
            <span>Sub Categories</span>
          </li>
          <li>Baby Care</li>
          <li>Women Care</li>
          <li>Men Care</li>
          <li>Hair Care</li>
          <li>Skin Care</li>
          <li>Oral Care</li>
          <li>Organic Products</li>
          <li>Medical Supplies</li>
          <li>Protection 101</li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
