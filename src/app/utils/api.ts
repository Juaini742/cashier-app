import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("/api/public/products");

  return response.data;
};

export const getHistory = async () => {
  const response = await axios.get("/api/public/checkout");

  return response.data.shipping;
};

export const getHistoryById = async (id?: string) => {
  const response = await axios.get(`/api/public/checkout/${id}`);

  return response.data.shipping;
};
