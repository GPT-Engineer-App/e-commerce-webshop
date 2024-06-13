import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0).toFixed(2);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    total: `$${total}`,
  };
};

export { useCart };