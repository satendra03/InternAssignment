import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <div className="text-center mt-20">Your cart is empty.</div>;
    }

    return (
        <div className="p-6 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center border-b py-4"
                    >
                        <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p>${item.price}</p>
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
