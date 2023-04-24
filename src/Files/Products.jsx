import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import addstyle from "./Addproduct.model.css";

const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [Category, setCategory] = useState("");
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
    const { name, price, description, quantity, Category } = newProduct;
    setName(name);
    setPrice(price);
    setDescription(description);
    setQuantity(quantity);
    setCategory(Category);

    setIsEdit(true);
    setId(id);
  };

  return (
    <div className={addstyle.lk}>
      <div className="div1">
        <div className="div2">
          <div className="div3">
            <h1 className="div4">Products</h1>
            <form onSubmit={handleSubmit}>
              <div className="div5">
                <label htmlFor="name" className="sr-only">
                  Product Name
                </label>
                <input
                  type="text"
                  name="product name"
                  id="product Name"
                  placeholder="Enter Product Name"
                  className="input1"
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
                  className="input1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="div5">
                <label htmlFor="description" className="sr-only">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                  className="input1"
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
                  className="input1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="div5">
                <label htmlFor="Category" className="sr-only">
                  Category
                </label>
                <input
                  type="text"
                  name="Category"
                  id="Category"
                  placeholder="Enter Category"
                  className="input1"
                  value={Category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {/* <label htmlFor="totalPrice" className="sr-only">
                  Total Price
                </label>
                <input
                  type="text"
                  name="totalPrice"
                  id="totalPrice"
                  placeholder="Enter Total Price"
                  className="input1"
                  value={quantity * price}
                  onChange={(e) => setTotalPrice(e.target.value)}
                /> */}
              </div>
              <div className="div5">
                <button type="submit" className="Addbnt bg-blue-500">
                  {isEdit ? "Edit" : "Add"}
                </button>
              </div>
            </form>
            <div className="tab">
              <div className="w-full">
                <h1 className="list">Product List</h1>
                <div className="scrol">
                  <table className="table1">
                    <thead>
                      <tr>
                        <th className="th1">Product Name</th>
                        <th className="th1">Price</th>
                        <th className="th1">Description</th>
                        <th className="th1">Quantity</th>
                        <th className="th1">Category</th>
                        <th className="th1">Total Price</th>
                        <th className="th1">Action</th>
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
                        } = item;
                        return (
                          <tr key={id}>
                            <td className="td1">{name}</td>
                            <td className="td1">{price}</td>
                            <td className="td1">{description}</td>
                            <td className="td1">{quantity}</td>
                            <td className="td1">{Category}</td>
                            <td className="td1">{price * quantity}</td>
                            <td className="bnt2">
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
    </div>
  );
};

export default Products;
