import React, { useEffect, useState } from "react";
import axios from "axios";
import "./brand.scss";

const Brand = (props) => {
  const [products, setProducts] = useState([]);

  // const getProductsByBrandById = () => {
  //   let brandId = props.match.params.brand_id;
  //   axios
  //     .get(``)
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.data);
  //     });
  // };

  // useEffect(() => {
  //   getProductsByBrandById();
  // }, []);

  return (
    <div className="Brand">
      {/* {products.map((product) => (
        <p>{product.name}</p>
      ))} */}
    </div>
  );
};

export default Brand;
