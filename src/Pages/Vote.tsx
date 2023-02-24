import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";

import { Product } from "../constants";

const Vote = () => {
  const [change, setChange] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, [change]);

  const updateUI = () => {
    setChange((prev) => !prev);
  };
  return (
    <div style={{ display: "flex", gap:"5%" }}>
      {products?.map((el) => {
        return <StudentCard key={el.id} {...el} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Vote;
