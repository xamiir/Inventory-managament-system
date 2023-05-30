import axios from "../utils/axios";

export const fetchUsers = async () => {
  return (await axios.get("/users")).data;
};

export const registerUser = async (data) => {
  const res = await axios.post("/users", {
    ...data,
  });
  return res.data;
};
export const updateUserByID = async (id, data) => {
  const res = await axios.put(`/users/${id}`, {
    ...data,
  });
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`/users/${id}`);
  return res.data;
};

// user count total from api to react app
export const fetchUserCount = async () => {
  return (await axios.get("/users/count")).data;
};

// login user
export const loginUser = async (data) => {
  const res = await axios.post("/login", {
    ...data,
  });
  return res.data;
};

// category
export const fetchCategories = async () => {
  return (await axios.get("/categories")).data;
};

export const createCategory = async (data) => {
  const res = await axios.post("/categories", {
    ...data,
  });
  return res.data;
};

export const editCategory = async (id, data) => {
  const res = await axios.put(`/categories/${id}`, {
    ...data,
  });
  return res.data;
};

// export const deleteCategory = async (id) => {
//   const res = await axios.delete(`/categories/${id}`);
//   return res.data;
// };
export const deleteCategory = async (id) => {
  const res = await axios.delete(`/categories/${id}`);
  return res.data;
};

// category count total from api to react app
export const fetchCategoryCount = async () => {
  return (await axios.get("/categories/count")).data;
};

// customer

export const fetchCustomer = async () => {
  return (await axios.get("/customers")).data;
};

export const createCustomer = async (data) => {
  const res = await axios.post("/customers", {
    ...data,
  });
  return res.data;
};

export const updateCustomerByID = async (id, data) => {
  const res = await axios.put(`/customers/${id}`, {
    ...data,
  });
  return res.data;
};

export const editCustomer = async (data) => {
  const res = await axios.put(`/customers/${data.id}`, {
    ...data,
  });
  return res.data;
};

export const deleteCustomer = async (id) => {
  const res = await axios.delete(`/customers/${id}`);
  return res.data;
};
// customer count total from api to react app
export const fetchCustomerCount = async () => {
  return (await axios.get("/customers/count")).data;
};

// product
export const fetchProducts = async () => {
  const res = await axios.get("/products");
  return res.data;
};

export const createProduct = async (data) => {
  const res = await axios.post("/products", {
    ...data,
  });
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await axios.put(`/products/${id}`, {
    ...data,
  });
  return res.data;
};

export const deleteProducts = async (id) => {
  const res = await axios.delete(`/products/${id}`);
  return res.data;
};

export const uploadImage = async (file) => {
  const res = await axios.post("/upload-image", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
// product count total from api to react app
export const fetchProductCount = async () => {
  return (await axios.get("/products/total")).data;
};

export const fetchOrdersMeta = async () => {
  const res = await axios.get("/orders/meta");
  return res.data;
};

export const createOrder = async (data) => {
  const res = await axios.post("/orders", {
    ...data,
  });
  return res.data;
};
