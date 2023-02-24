import axios, { AxiosResponse } from "axios";
import { Product } from "./constants";

export const addProduct = async (newProduct: Product) => {
  let res = await axios.post("http://localhost:8080/products", newProduct);
  return res.data;
};

export const getProducts = async () => {
  let res: AxiosResponse<Product[]> = await axios.get(
    "http://localhost:8080/products"
  );
  return res.data;
};

export const updateVote = async (id: any) => {
  let p: AxiosResponse<Product> = await axios.get(
    `http://localhost:8080/products/${id}`
  );
  let res: AxiosResponse<Product> = await axios.patch(
    `http://localhost:8080/products/${id}`,
    {
      vote: p.data.vote + 1,
    }
  );
  return res.data;
};
