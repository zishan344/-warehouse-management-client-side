import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, children }) => {
  const {
    description,
    image,
    price,
    product_name,
    quantity,
    supplyar_name,
    _id,
  } = product;
  const navigate = useNavigate();
  const updateProduct = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="relative pb-12">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product?.image}
          alt={product?.imageAlt}
          className="h-80 w-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.product_name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-500">
        {product?.quantity} product{" "}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${product?.price}
      </p>
      <p className="mt-1 text-lg text-gray-600 my-2">
        {product?.description.slice(0, 100)}
        {product?.description.length > 100 && (
          <span title={`${product.description}`}>...</span>
        )}
      </p>
      <div className="relative">
        <p className=" product bottom-0 text-lg font-medium text-gray-900">
          Supplier :{product?.supplyar_name}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between static md:absolute bottom-0 w-full">
        <button
          onClick={() => updateProduct(_id)}
          className="  my-2 cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          stock update
        </button>
        {children}
      </div>
    </div>
  );
};

export default Product;
