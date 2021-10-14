import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className="flex w-full items-center justify-center gap-21 p-5">
      <img
        className="w-[20%] rounded-md"
        src="/images/image-product-1-thumbnail.jpg"
        alt=""
      />
      <div className="w-[80%] gap-1 flex flex-col items-center">
        <div className="w-[200px]">
          <span>Autumn Limited Edition</span>
        </div>

        <div className="flex gap-2">
          <span className="text-gray-400">$125.00 x 3</span>
          <span className="text-black font-bold">$375.00</span>
        </div>
      </div>

      <div>
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default CartItem;
