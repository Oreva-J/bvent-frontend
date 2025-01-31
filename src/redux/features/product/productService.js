import axios from "axios";

const BACKEND_URL = "https://bvent-api.onrender.com"

const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all Products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


// Delete a Products
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// get a Products
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

// Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
