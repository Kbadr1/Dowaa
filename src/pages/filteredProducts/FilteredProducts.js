import axios from "axios";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import { Link } from "react-router-dom";

import Pagination from "../../components/pagination/Pagination";
import Product from "../../components/product/Product";
import "./filteredProducts.scss";

const FilteredProducts = () => {
  const { products, searchTerm } = useContext(ApiContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(1200);
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
    <div className="FilteredProducts container">
      <div className="small-nav">
        <Link to="/">Main</Link>
        <i class="fas fa-angle-right"></i>
        <span>Search Resuslts for {searchTerm}</span>
      </div>
      <div className="row pb-3">
        <div className="col-lg-5">
          <h3 className="current-page">Searh Results for "{searchTerm}"</h3>
        </div>
        <div className=" offset-lg-4 col-lg-3">
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
        {currentProducts
          .filter((product) => {
            if (searchTerm == "") {
              return product;
            } else if (
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
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

export default FilteredProducts;
