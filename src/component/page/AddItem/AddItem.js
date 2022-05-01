import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAddProduct = (e) => {
    e.preventDefault();

    const product_name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const email = e.target.email.value;
    const supplyar_name = e.target.supplier_name.value;
    const card = {
      product_name,
      image,
      description,
      price,
      quantity,
      supplyar_name,
      email,
    };
    console.log(card);
    fetch("https://enigmatic-eyrie-33917.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
  };
  return (
    <div>
      <div className="my-4 bg-white p-5 max-w-md mx-auto rounded shadow-sm">
        <h2 className="text-4xl px-4 ">Add a new item</h2>
        <form onSubmit={handleAddProduct} className="mt-10 space-y-8">
          <input
            required
            name="email"
            className="w-full border rounded h-12 px-4 focus:outline-none"
            value={user.email}
            readOnly
            type="email"
          />
          <input
            required
            name="name"
            className="w-full border rounded h-12 px-4 focus:outline-none"
            placeholder="Product name"
            type="text"
          />

          <input
            required
            className="w-full border rounded h-12 px-4 focus:outline-none"
            placeholder="image url"
            type="text"
            name="image"
          />

          <div className="mt-4">
            <textarea
              id="about"
              name="description"
              rows="4"
              className="shadow-sm px-4  mt-2 py-2 block w-full focus:outline-none sm:text-sm border border-gray-300 rounded-md"
              placeholder="product description"
            ></textarea>
          </div>

          <input
            required
            name="price"
            className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
            placeholder="Price"
            type="number"
          />
          <input
            required
            name="quantity"
            className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
            placeholder="Quantity"
            type="number"
          />
          <input
            required
            name="supplier_name"
            className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
            placeholder="Supplier name"
            type="text"
          />
          <div className="flex flex-col md:flex-row md:items-center justify-center ">
            <input
              className="cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
