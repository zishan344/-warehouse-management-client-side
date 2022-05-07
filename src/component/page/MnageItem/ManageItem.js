import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../Sheard/Loading/Loading";

const ManageItem = () => {
  // const [products, setProducts] = useAllProduct();
  const [products, setProducts] = useState([]);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    const url = "https://enigmatic-eyrie-33917.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isReload]);
  // console.log(products);
  if (products.length === 0) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("successfully deleted this item");
            setIsReload(!isReload);
          });
      }
    });
  };
  return (
    <div className="container mx-auto">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>stock</th>
            <th>supplyar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.product_name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td className="flex justify-between w-96:flex-col">
                  <p>{product.supplyar_name}</p>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-danger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="flex flex-col md:flex-row md:items-center justify-between ">
        <button className="cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link className="text-white" to="/addItem">
            add new item
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ManageItem;
