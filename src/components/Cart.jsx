import React from 'react';
import CartButton from './CartButton';
import desserts from './dessertsData';

export const Cart = () => {
  return (
    <div className="pr-6 content-center max-w-screen-sm mx-auto">
      <h1 className="font-bold">Desserts</h1>
      <div className="mx-auto flex justify-center items-center">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row grid-cols-1 gap-y-32 gap-x-5">
          {desserts.map((dessert, index) => (
            <li key={index} className="rounded w-44 h-44">
              <div className="relative">
                <img src={dessert.image} className="rounded-lg" alt={dessert.name} />
                <CartButton dessert={dessert} />
              </div>
              <p className="pt-5">{dessert.name}</p>
              <p>{dessert.description}</p>
              <p>{dessert.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;