import React from "react";
import ReactLoading from "react-loading";

const Example = ({ spin, color }) => (
  <div className="d-flex flex-column  align-items-center">
    <ReactLoading type="spin" color="red" height={100} width={50} />
    <h3>Loading...</h3>
  </div>
);

export default Example;
