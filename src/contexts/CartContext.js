import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getCategories();
  }, [cart]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        // products,
        // setProducts,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalSum,
        getCartTotal,
        setQuantity,
        categories,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
