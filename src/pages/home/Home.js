import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./home.scss";

const Home = () => {
  const { products, addToCart, cart } = useContext(CartContext);

  return (
    <div className="Home container">
      <h1>Home page</h1>

      <div className="row">
        {products.map((product, idx) => (
          <div className="product col-lg-6" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt="" />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
