import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // get all categories
  const getAllCategories = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get all brands
  const getAllBrands = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/brands`)
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get all products
  const getAllProducts = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    getAllBrands();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        categories,
        brands,
        products,
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
