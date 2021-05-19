import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { SavedContext } from "../../contexts/SavedContext";
import { ApiContext } from "../../contexts/ApiContext";
import "./allProducts.scss";
import Pagination from "../../components/pagination/Pagination";
import Product from "../../components/product/Product";

const AllProducts = () => {
  const { products } = useContext(ApiContext);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
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

  return (
    <div className="AllProducts container">
      <div className="small-nav">
        <Link to="/">Main</Link>
        <i class="fas fa-angle-right"></i>
        <span>Products</span>
      </div>
      <div className="row pb-3">
        <div className="col-lg-3">
          <h3 className="current-page">All Products</h3>
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

export default AllProducts;
