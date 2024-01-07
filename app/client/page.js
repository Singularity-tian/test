"use client";
import React from "react";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = React.useState(0);
  console.log("client component");
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default ClientPage;
