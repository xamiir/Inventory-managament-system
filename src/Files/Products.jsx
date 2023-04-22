import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import productStyle from "./product.css";

const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [Category, setCategory] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [Product, setProduct] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      const newProduct = {
        id: new Date().getTime().toString(),
        name,
        price,
        description,
        quantity,
        Category,
        totalPrice,
      };
      if (
        name === "" ||
        price === "" ||
        description === "" ||
        quantity === "" ||
        Category === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
      setProduct([...Product, newProduct]);
      setName("");
      setPrice("");
      setDescription("");
      setQuantity("");
      setCategory("");
      setTotalPrice("");
    } else {
      const newProduct = Product.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name,
            price,
            description,
            quantity,
            Category,
            totalPrice,
          };
        }
        return item;
      });
      setProduct(newProduct);
      setName("");
      setPrice("");
      setDescription("");
      setQuantity("");
      setCategory("");
      setTotalPrice("");
      setIsEdit(false);
      setId(0);
    }
  };
  const removeProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this Product?")) {
      return;
    }
    const newProduct = Product.filter((item) => item.id !== id);
    setProduct(newProduct);
  };

  const editProduct = (id) => {
    const newProduct = Product.find((item) => item.id === id);
    const { name, price, description, quantity, Category, totalPrice } =
      newProduct;
    setName(name);
    setPrice(price);
    setDescription(description);
    setQuantity(quantity);
    setCategory(Category);
    setTotalPrice(totalPrice);
    setIsEdit(true);
    setId(id);
  };

  return (
    <div className="container">
      <div className="div-container">
        <div className="child-container">
          <h1 className="tag-h1">Products</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control  ">
              <label htmlFor="name" className="sr-only">
                Product Name
              </label>
              <input
                type="text"
                name="product name"
                id="product Name"
                placeholder="Enter Product Name"
                className="input-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="price" className="sr-only">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter Price"
                className="input-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-4 flex justify-between  ">
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                className="input-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="quantity" className="sr-only">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Enter Quantity"
                className="input-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-4 flex justify-between  ">
              <label htmlFor="Category" className="sr-only">
                Category
              </label>
              <input
                type="text"
                name="Category"
                id="Category"
                placeholder="Enter Category"
                className="input-control"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="totalPrice" className="sr-only">
                Total Price
              </label>
              <input
                type="text"
                name="totalPrice"
                id="totalPrice"
                placeholder="Enter Total Price"
                className="input-control"
                value={quantity * price}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>
            <div className="bnt-container  ">
              <button type="submit" className="addButton-control">
                {isEdit ? "Edit" : "Add"}
              </button>
            </div>
          </form>
          <div className="table-container">
            <div className="w-full">
              <h1 className="list-control">Product List</h1>
              <div className="scrol-bal">
                <table className="table-control">
                  <thead>
                    <tr>
                      <th className="th-control">Product Name</th>
                      <th className="th-control">Price</th>
                      <th className="th-control">Description</th>
                      <th className="th-control">Quantity</th>
                      <th className="th-control">Category</th>
                      <th className="th-control">Total Price</th>
                      <th className="th-control">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Product.map((item) => {
                      const {
                        id,
                        name,
                        price,
                        description,
                        quantity,
                        Category,
                        totalPrice,
                      } = item;
                      return (
                        <tr key={id}>
                          <td className="td-control">{name}</td>
                          <td className="td-control">{price}</td>
                          <td className="td-control">{description}</td>
                          <td className="td-control">{quantity}</td>
                          <td className="td-control">{Category}</td>
                          <td className="td-control">{price * quantity}</td>
                          <td className="bnt-action">
                            <button
                              className="bg-green-500 text-white px-4 py-2 rounded font-medium"
                              onClick={() => editProduct(id)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="bg-red-500 text-white px-4 py-2 rounded font-medium"
                              onClick={() => removeProduct(id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
