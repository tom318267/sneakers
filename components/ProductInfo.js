import React from "react";
import Quantity from "./Quantity";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const ProductInfo = () => {
  return (
    <div className="flex flex-col justify-center px-5 pb-12 w-screen">
      <h3 className="uppercase tracking-wider text-sm py-4 font-bold text-orange">
        Sneaker Company
      </h3>

      <h1 className="text-2xl w-2/3 text-black font-bold">
        Fall Limited Edition Sneakers
      </h1>
      <p className="py-5 w-full">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex justify-between w-full pb-8">
        <div className="flex gap-4">
          <span className="font-bold text-2xl">$125.00</span>
          <span className="flex items-center bg-paleOrange px-2 text-orange font-bold">
            50%
          </span>
        </div>

        <div>
          <span className="text-gray-400 line-through">$250.00</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Quantity />
        <button className="flex bg-orange cursor-pointer w-full text-white font-bold gap-2 justify-center py-4 mt-4 sm:mt-0 rounded-lg">
          <ShoppingCartIcon className="h-6" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
