import React from "react";
import Banner from "./Banner/Banner";
import Criteria from "./Criteria/Criteria";
import Products from "./Prodcuts/Products";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Criteria></Criteria>
      <Products></Products>
    </div>
  );
};

export default Home;
// stackoverflow question https://stackoverflow.com/questions/72067527/uncaught-in-promise-typeerror-failed-to-execute-fetch-on-window-invalid
