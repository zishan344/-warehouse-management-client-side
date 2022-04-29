import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loading;
