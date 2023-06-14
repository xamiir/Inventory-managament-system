//import { useState, useContext } from "react";
import { useState } from "react";

import { toast } from "react-toastify";
//import Contextapi, { useStore } from "./Contextapi";
import { useStore } from "./Contextapi";
import {
  fetchCategories,
  createProduct,
  updateProduct,
  uploadImage,
} from "../services/api-calls";
//import { RouterProvider } from "react-router-dom";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { data: categories, error } = useSWR("/category", fetchCategories);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();
  const { products, dispatch, mutateProducts } = useStore();
  const isEdit = pathname.includes("edit");
  const currentProduct =
    products?.length > 0 && products.find((item) => item._id === params.id);

  const [productNames, setProductNames] = useState(
    isEdit ? currentProduct?.name : ""
  );
  const [productPrice, setProductPrice] = useState(
    isEdit ? currentProduct?.cost : ""
  );
  const [productQuantity, setProductQuantity] = useState(
    isEdit ? currentProduct?.quantity : ""
  );
  const [productDescription, setProductDescription] = useState(
    isEdit ? currentProduct?.description : ""
  );

  // const [productImage, setProductImage] = useState(
  //   isEdit ? currentProduct?.image : []
  // );
  // const [salesPrice, setSalesPrice] = useState(

  // );

  const [previewImage, setPreviewImage] = useState("");

  const currentCategory = isEdit ? currentProduct?.category?._id : "";

  //const [productCategory, setProductCategory] = useState();
  const [productCategory, setProductCategory] = useState(currentCategory);

  const uploadFile = async (path) => {
    const formData = new FormData();
    formData.append("image", path);
    const res = await uploadImage(formData);
    setPreviewImage(res);
  };

  //const { product, setProduct } = useContext(Contextapi);
  const addProduct = async (e) => {
    e.preventDefault();
    if (
      !productNames ||
      !productPrice ||
      !productQuantity ||
      !productDescription ||
      !productCategory
    ) {
      return toast.error("Please Fill All Fields");
    }

    const data = {
      name: productNames,
      cost: productPrice,
      quantity: productQuantity,
      description: productDescription,
      category: productCategory,
      image: previewImage,
    };
    const res = !isEdit
      ? await createProduct(data)
      : await updateProduct(params.id, data);

    toast.success(res.message);
    dispatch({ type: "ADD_PRODUCTS", payload: res });

    navigate("/productList");

    mutateProducts();
    resetForm();
  };

  const resetForm = () => {
    setProductNames("");
    setProductPrice("");
    setProductQuantity("");
    setProductDescription("");
    setProductCategory("");
  };

  if (error) {
    return (
      <h1>
        {Object.values(error).map((item, i) => {
          if (typeof item === "object") {
            return <p key={i}>{item.message}</p>;
          }
          return <p key={i}>{item}</p>;
        })}
      </h1>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH1H5GETy3tbS2IImN46BT7SUMN25z06rfRYSQk93Dvjh7fIGHRKp1BFS4vf2iq17MhQ&usqp=CAU"
              alt=""
              className="object-cover w-full h-full hidden lg:block"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">
              {isEdit ? "Edit" : "Add"} Product{!isEdit ? "s" : ""}
              {"- "}
              {productNames}
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Product Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Product Name"
                    value={productNames}
                    onChange={(e) => setProductNames(e.target.value)}
                  />
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Product Price
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="number"
                    value={productPrice}
                    placeholder="Product Price"
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Product Quantity
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="number"
                    value={productQuantity}
                    placeholder="Product Quantity"
                    onChange={(e) => setProductQuantity(e.target.value)}
                  />
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Product Description
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    value={productDescription}
                    placeholder="Product Description"
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Product Category
                  </label>
                  {/* <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    value={productCategory}
                    placeholder="Product Category"
                    onChange={(e) => setProductCategory(e.target.value)}
                  /> */}

                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    value={currentCategory || productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  >
                    {categories?.map((category) => (
                      <option key={category.name} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Product Image
                  </label>
                  {/* <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    value={productCategory}
                    placeholder="Product Category"
                    onChange={(e) => setProductCategory(e.target.value)}
                  /> */}

                  <input
                    type="file"
                    // value={productImage}
                    onChange={(e) => uploadFile(e.target.files[0])}
                  />
                  {/* {productImage && (
                    <button onClick={() => uploadFile(productImage)}>
                      upload
                    </button>
                  )} */}
                </div>

                {previewImage && (
                  <img
                    src={previewImage}
                    className="w-48 h-48 rounded-md"
                    alt="preview"
                  />
                )}
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={addProduct}
                >
                  {isEdit ? "Edit" : "Add"} Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
