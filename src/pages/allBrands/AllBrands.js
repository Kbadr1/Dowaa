import React, { useEffect, useState } from "react";
import axios from "axios";
import "./allBrands.scss";
import { Link } from "react-router-dom";

const AllBrands = () => {
  const [brands, setbrands] = useState([]);

  const getAllBrands = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/brands`)
      .then((res) => {
        setbrands(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBrands();
  });

  return (
    <div className="AllBrands container">
      <div className="small-nav">
        <Link to="/">Main</Link>
        <i class="fas fa-angle-right"></i>
        <span>Brands</span>
      </div>
      <div className="row">
        {brands.map((brand) => (
          <div className="col-md-3 col-6">
            <Link to={`/brand/${brand._id}`}>
              <div className="brand-image">
                <img src={brand.image} alt="" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
