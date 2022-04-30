import { useEffect, useState } from "react";

const useAllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://enigmatic-eyrie-33917.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useAllProduct;
