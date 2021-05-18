import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../../../contexts/ApiContext";
import "./BottomNav.scss";

const BottomNav = () => {
  const { allCategories } = useContext(ApiContext);

  return (
    <div className="BottomNav ">
      <div className="container">
        <ul>
          <li className="sub">
            <span>Sub Categories</span>
          </li>
          {allCategories.map((category) => (
            <li key={category._id}>
              <Link to={`/category/${category._id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
