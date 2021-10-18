import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="CartDropdown absolute w-[300px] h-[300px] overflow-scroll bg-white top-20 right-0 z-10 rounded-lg text-sm">
      <CartItem cartItems={cartItems} />
    </div>
  );
};

export default CartDropdown;
