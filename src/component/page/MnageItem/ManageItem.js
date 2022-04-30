import React from "react";
import { Table } from "react-bootstrap";
import useAllProduct from "../../hooks/useAllProduct";
import Loading from "../../Sheard/Loading/Loading";

const ManageItem = () => {
  const [products, setProducts] = useAllProduct();
  console.log(products);
  if (products.length == 0) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
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
                  <button className="btn btn-danger">
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
    </div>
  );
};

export default ManageItem;
