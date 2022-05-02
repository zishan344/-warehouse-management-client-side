import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Sheard/Loading/Loading";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);
  if (product == {}) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  const delivered = (e) => {
    const product_name = product.product_name;
    const image = product.image;
    const description = product.description;
    const price = product.price;
    const quantity = parseInt(product.quantity) - 1;
    const email = product.email;
    const supplyar_name = product.supplyar_name;
    const confirm = window.confirm("Are you sure you want to delivered");
    if (!confirm) {
      return;
    }
    if (quantity == -1) {
      return toast.error("please add the product quantity");
    }

    const card = {
      product_name,
      image,
      description,
      price,
      quantity,
      supplyar_name,
      email,
    };
    fetch(`https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`${1} product delivered successfully`);
        setIsReload(!isReload);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const product_name = product.product_name;
    const image = product.image;
    const description = product.description;
    const price = product.price;
    const inputValue = parseInt(e.target.update.value);
    const quantity = inputValue + parseInt(product.quantity);
    const email = product.email;
    const supplyar_name = product.supplyar_name;
    if (!inputValue) {
      return toast.error("you have not enough product");
    }
    const card = {
      product_name,
      image,
      description,
      price,
      quantity,
      supplyar_name,
      email,
    };
    fetch(`https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`${inputValue} product added successfully`);
        setIsReload(!isReload);
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
      <button
        onClick={delivered}
        className=" my-2 cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
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
