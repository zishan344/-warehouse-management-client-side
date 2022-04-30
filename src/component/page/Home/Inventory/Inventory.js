import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../../../Sheard/Loading/Loading";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (product == {}) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  //   const delivered = () => {
  //     const quantity = product["quantity"];
  //     const result = console.log(quantity);
  //     return quantity;
  //   };
  const handleUpdate = (e) => {
    e.preventDefault();
    const quantity = e.target.update.value;
    fetch(`https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
  };
  return (
    <div className="max-w-lg mx-auto mt-4">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product?.image}
          alt={product?.imageAlt}
          className="h-60 w-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.product_name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-500">
        {product?.quantity} product{" "}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${product?.price}
      </p>
      <p className="mt-1 text-lg text-gray-600">{product?.description}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">
        Supplier :{product?.supplyar_name}
      </p>
      <button className=" my-2 cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        delivered
      </button>
      {/* update product quantity */}
      <form onSubmit={handleUpdate}>
        <InputGroup className="mb-3">
          <FormControl
            name="update"
            type="number"
            placeholder="update product quantity"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text
            className="btn btn-primary bg-indigo-600 "
            id="basic-addon2"
          >
            <button type="submit">update</button>
          </InputGroup.Text>
        </InputGroup>
      </form>
    </div>
  );
};

export default Inventory;
