import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./brand.scss";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import Product from "../../components/product/Product";

const Brand = (props) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentBrand, setCurrentBrand] = useState("");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  const totalProducts = products.length;

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getProductsByBrandById = () => {
    let brandId = props.match.params.brand_id;
    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/products/brands?brands=${brandId}`
      )
      .then((res) => {
        setProducts(res.data);
        setCurrentBrand(res.data[0].brand.name);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getProductsByBrandById();
  }, []);

  return (
    <div className="Brand container">
      <div className="small-nav">
        <Link to="/">Main</Link>
        <i class="fas fa-angle-right"></i>
        <span>{currentBrand}</span>
      </div>
      <div className="row pb-3">
        <div className="col-lg-3">
          <h3 className="current-category">{currentBrand}</h3>
        </div>
        <div className=" offset-lg-6 col-lg-3">
          <Pagination
            previousPage={previousPage}
            pageNumbers={pageNumbers}
            paginate={paginate}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <div className="row">
        {currentProducts.map((product) => (
          <div className="col-6 col-md-4 col-lg-3" key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </div>
      <Pagination
        previousPage={previousPage}
        pageNumbers={pageNumbers}
        paginate={paginate}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Brand;
