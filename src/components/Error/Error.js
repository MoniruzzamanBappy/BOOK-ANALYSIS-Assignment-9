import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold">404</h1>
      <h3 className="font-medium text-4xl">page not found</h3>
      <p className="font-medium text-4xl">Boo, looks like a ghost stole this page!</p>
    </div>
  );
};

export default Error;
