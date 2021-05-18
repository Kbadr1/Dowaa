import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getAllCategories = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/categories`)
      .then((res) => {
        setAllCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllBrands = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/brands`)
      .then((res) => {
        setAllBrands(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProducts = () => {
    axios
      .get(`https://boiling-waters-85095.herokuapp.com/api/products`)
      .then((res) => {
        setAllProducts(res.data);
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
        allCategories,
        allBrands,
        allProducts,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
