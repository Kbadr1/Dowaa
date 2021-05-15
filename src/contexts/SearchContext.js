import React, { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  }, []);

  return (
    <SearchContext.Provider
      value={{
        products,
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
