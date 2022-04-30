import React from "react";
import useAllProduct from "../../../hooks/useAllProduct";
import Loading from "../../../Sheard/Loading/Loading";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useAllProduct();
  // useEffect(() => {
  //   const url = "https://enigmatic-eyrie-33917.herokuapp.com/products";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  if (products.length == 0) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <h2 className="text-center text-4xl text-gray-700 font-bold mt-4">
        inventory items{" "}
      </h2>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
