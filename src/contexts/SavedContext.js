import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SavedContext = createContext();

const SavedContextProvider = (props) => {
  const savedFromLocalStorage = JSON.parse(
    localStorage.getItem("saved") || "[]"
  );
  const [saved, setSaved] = useState(savedFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  const addToSaved = (product) => {
    let newSaved = [...saved];
    let itemInSaved = newSaved.find((item) => product.name === item.name);
    if (itemInSaved) {
      itemInSaved.quantity++;
    } else {
      itemInSaved = {
        ...product,
        quantity: 1,
      };
      newSaved.push(itemInSaved);
    }
    setSaved(newSaved);
  };

  const removeFromSaved = (productToRemove) => {
    setSaved(saved.filter((product) => product !== productToRemove));
  };

  return (
    <SavedContext.Provider value={{ saved, addToSaved, removeFromSaved }}>
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedContextProvider;
