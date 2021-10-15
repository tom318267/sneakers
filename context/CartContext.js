import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {};
};
