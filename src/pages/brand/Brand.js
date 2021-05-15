import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./brand.scss";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import { SavedContext } from "../../contexts/SavedContext";

const Brand = (props) => {
  const { addToCart } = useContext(CartContext);
  const { addToSaved } = useContext(SavedContext);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(40);
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
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt="..." />
              </Link>
              <div class="prdouct-body">
                <Link to={`/product/${product._id}`}>
                  <p class="product-name">{product.name}</p>
                </Link>
                <h5 class="product-price">{product.price} EGP</h5>
                <button
                  onClick={() => addToCart(product)}
                  type="button"
                  class="btn btn-primary add-to-cart"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => addToSaved(product)}
                  type="button"
                  class="btn btn-primary add-to-saved"
                >
                  <i class="fas fa-heart"></i>
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

export default Brand;
