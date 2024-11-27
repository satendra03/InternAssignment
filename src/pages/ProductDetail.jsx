import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    return (
        <div className="p-6 min-h-screen">
            <Link
                to="/"
                className="inline-block px-4 py-2 rounded-lg shadow-md mb-6 bg-gray-300"
            >
                Back to Products
            </Link>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-64 h-64 object-contain mb-6 md:mb-0 md:mr-6"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                    <p className="text-lg mb-4">{product.description}</p>
                    <p className="text-xl font-semibold mb-4">${product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
