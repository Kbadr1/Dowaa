import React, { useContext, useEffect, useState } from "react";
import "./category.scss";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";

const Category = (props) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const getProductsByCategory = () => {
    let categoryId = props.match.params.category_id;
    axios
      .get(
        `https://boiling-waters-85095.herokuapp.com/api/products?categories=${categoryId}`
      )
      .then((res) => {
        setProducts(res.data);
        setCurrentCategory(res.data[0].category.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsByCategory();
  }, [props.match.params.category_id]);

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
    <div className="Category container">
      <div className="small-nav">
        <Link to="/">Main</Link>
        <i class="fas fa-angle-right"></i>
        <Link to="/all-products">Products</Link>
        <i class="fas fa-angle-right"></i>
        <span>{currentCategory}</span>
      </div>
      <div className="row pb-3">
        <div className="col-lg-3">
          <h3 className="current-category">{currentCategory}</h3>
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
          <div key={product._id} className="col-6 col-md-4 col-lg-3">
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

export default Category;
