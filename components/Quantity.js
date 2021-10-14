import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = () => {
  const [numItems, setNumItems] = useState(0);

  const addItem = () => {
    setNumItems((c) => c + 1);
  };
  const decreaseItem = () => {
    setNumItems((c) => Math.max(c - 1, 0));
  };

  return (
    <div className="bg-gray-100 w-full mx-auto cursor-pointer rounded-lg flex justify-around items-center gap-20 py-4 px-2">
      <div onClick={decreaseItem} className="text-orange cursor-pointer">
        <FaMinus />
      </div>

      <div>
        <span>{numItems}</span>
      </div>

      <div onClick={addItem} className="text-orange cursor-pointer">
        <FaPlus />
      </div>
    </div>
  );
};

export default Quantity;
