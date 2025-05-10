import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;
