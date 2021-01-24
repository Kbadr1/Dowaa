import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);

  const [products, setProducts] = useState([
    {
      name: "AA Battery",
      cost: 2.99,
      image:
        "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4219862.jpg&fm=jpg",
    },
    {
      name: "blanket",
      cost: 19.99,
      image:
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?cs=srgb&dl=pexels-isabelle-taylor-1421176.jpg&fm=jpg",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
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
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
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
        products,
        setProducts,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalSum,
        getCartTotal,
        setQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
