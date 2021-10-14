import React from "react";
import CartItem from "./CartItem";

const CartDropdown = () => {
  return (
    <div className="absolute w-[300px] h-[300px] overflow-scroll bg-white top-20 right-0 z-10 rounded-lg text-sm">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartDropdown;