import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import CartContext from "../context/CartContext";

const CartItem = ({ cartItems }) => {
  const { removeItemFromCart } = useContext(CartContext);

  return cartItems.length ? (
    cartItems.map((item) => (
      <div
        key={item.id}
        className="flex w-full items-center justify-center gap-21 p-5"
      >
        <img className="w-[20%] rounded-md" src={item.imageSrc} alt="" />
        <div className="w-[80%] gap-1 flex flex-col items-center">
          <div className="w-[200px]">
            <span>{item.name}</span>
          </div>

          <div className="flex gap-2">
            <span className="text-gray-400">${item.price} x 1</span>
            <span className="text-black text-sm font-bold">${item.price}</span>
          </div>
        </div>

        <div onClick={() => removeItemFromCart(item)}>
          <FaTrashAlt />
        </div>
      </div>
    ))
  ) : (
    <h1 className="flex text-black h-full justify-center items-center">
      Your cart is empty
    </h1>
  );
};

export default CartItem;
