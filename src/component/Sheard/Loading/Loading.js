import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto  flex justify-center items-center">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loading;
