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
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <p className="mb-2">Total Items: {totalItems}</p>
            {items.length > 0 && <p className="mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>}
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-4">
                            <img src={item.image} alt={item.name} className="w-10 h-10 inline-block" />
                            <span>{item.name} (x{item.quantity})</span>
                            <button
                                onClick={() => handleRemoveItem(item.name)}
                                className="ml-auto bg-red-500 text-white px-2 py-1 rounded"
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