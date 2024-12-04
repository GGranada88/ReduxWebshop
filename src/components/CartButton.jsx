import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../cartSlice';

const CartButton = ({ dessert }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(dessert));
  };

  return (
    <button
      className="border hover:bg-[#c9aea6] delay-75 border-[#c9aea6] rounded-2xl py-1 px-4 flex items-center absolute top-36 right-8 bg-white"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default CartButton;