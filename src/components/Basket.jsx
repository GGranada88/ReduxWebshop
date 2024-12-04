import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../cartSlice';

const Basket = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (name) => {
        dispatch(removeItem({ name }));
    };

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            <p>Total Items: {totalItems}</p>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} className="w-10 h-10 inline-block mr-2" />
                            {item.name} (x{item.quantity})
                            <button
                                onClick={() => handleRemoveItem(item.name)}
                                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Basket;