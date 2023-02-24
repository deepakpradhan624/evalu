import React, { useState } from "react";
import { addProduct } from "../api";
import Navbar from "../components/Navbar";
import { Product } from "../constants";
import styles from "../styles/form.module.css";

const initialState = {
  image: "",
  name: "",
  code: "",
  batch: "",
  vote: 0,
};
const Home = () => {
  const [formData, setFormData] = useState<Product>(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
    };
    addProduct(newProduct);
    setFormData(initialState);
  };

  return (
    <div className={styles.formcontainer}>
      <form>
        <h1>Nominate</h1>
        <input
          type="url"
          placeholder="Image url"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          placeholder="Student Code"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Batch"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Nominate</button>
      </form>
    </div>
  );
};

export default Home;
