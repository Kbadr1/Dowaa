import React, { useContext } from "react";
import "./cart.scss";

import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    getTotalSum,
    setQuantity,
  } = useContext(CartContext);
  return (
    <div className="Cart container">
      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}

      <div className="row">
        {cart.map((product, idx) => (
          <div className="product col-lg-6" key={idx}>
            <h3>product name: {product.name}</h3>
            <h4>product cost: ${product.cost}</h4>
            <h4>quantity: {product.quantity}</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <img src={product.image} alt="" />
            <button onClick={() => removeFromCart(product)}>Remove Item</button>
          </div>
        ))}
      </div>

      <div>
        <h4>Total cost: ${getTotalSum()}</h4>
      </div>
    </div>
  );
};

export default Cart;
