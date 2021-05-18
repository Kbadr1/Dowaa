import axios from "axios";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import { Link } from "react-router-dom";
import "./filteredProducts.scss";

const FilteredProducts = () => {
  const { products, searchTerm } = useContext(ApiContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(40);
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
        <span>Search Resuslts {searchTerm}</span>
      </div>
      <div className="row pb-3">
        <div className="col-lg-5">
          <h3 className="current-page">Searh Results for "{searchTerm}"</h3>
        </div>
        <div className=" offset-lg-4 col-lg-3">
          <div className="pagination-nav">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link " href="#" onClick={previousPage}>
                    Previous
                  </a>
                </li>
                {pageNumbers.map((number) => (
                  <li class="page-item" key={number}>
                    <a
                      class="page-link"
                      onClick={() => paginate(number)}
                      href="#"
                    >
                      {number}
                    </a>
                  </li>
                ))}
                <li class="page-item">
                  <a class="page-link" href="#" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
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
            <div className="product col-6 col-md-4 col-lg-3 " key={product._id}>
              <div className="prdouct-content col-12">
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt="..." />
                </Link>
                <div class="prdouct-body">
                  <Link to={`/product/${product._id}`}>
                    <p class="product-name">{product.name}</p>
                  </Link>
                  <h5 class="product-price">{product.price} EGP</h5>
                  <button type="button" class="btn btn-primary">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination-nav">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item">
              <a class="page-link " href="#" onClick={previousPage}>
                Previous
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li class="page-item" key={number}>
                <a class="page-link" onClick={() => paginate(number)} href="#">
                  {number}
                </a>
              </li>
            ))}
            <li class="page-item">
              <a class="page-link" href="#" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilteredProducts;
