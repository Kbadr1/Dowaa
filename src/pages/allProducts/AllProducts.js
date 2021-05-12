import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allProducts.scss";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        {currentProducts.map((product) => (
          <div className="product col-6 col-md-4 col-lg-3 ">
            <div className="prdouct-content col-12">
              <img
                src="https://via.placeholder.com/200/5a0da6/FFFFFF/?text=Product+Image"
                alt="..."
              />
              <div class="prdouct-body">
                <p class="product-name">{product.name}</p>
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

export default AllProducts;
