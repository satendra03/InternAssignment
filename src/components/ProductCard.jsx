import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-4 truncate">{product.description}</p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
