import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../../../contexts/ApiContext";
import "./BottomNav.scss";

const BottomNav = () => {
  const { categories } = useContext(ApiContext);

  return (
    <div className="BottomNav ">
      <div className="container d-flex justify-content-center">
        <ul>
          {categories.map((category) => (
            <li key={category._id}>
              <NavLink
                activeClassName="active-category"
                to={`/category/${category._id}`}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
