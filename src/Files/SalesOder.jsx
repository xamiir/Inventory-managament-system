import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const SalesOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [regDate, setRegDate] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orginalPrice, setOrginalPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [SalesOrder, setSalesOrder] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      const newSalesorder = {
        id: new Date().getTime().toString(),
        customerName,
        regDate,
        productName,
        quantity,
        orginalPrice,
        discount,
        totalPrice,
      };
      if (
        customerName === "" ||
        regDate === "" ||
        productName === "" ||
        quantity === "" ||
        orginalPrice === "" ||
        discount == ""
      ) {
        alert("Please fill all the fields");
        return;
      }
      setSalesOrder([...SalesOrder, newSalesorder]);
      setCustomerName("");
      setProductName("");
      setRegDate("");
      setQuantity("");
      setOrginalPrice("");
      setDiscount("");
      setTotalPrice("");
    } else {
      const newSalesorder = SalesOrder.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            customerName,
            regDate,
            productName,
            quantity,
            orginalPrice,
            discount,
            totalPrice,
          };
        }
        return item;
      });
      setSalesOrder(newSalesorder);
      setCustomerName("");
      setProductName("");
      setRegDate("");
      setQuantity("");
      setOrginalPrice("");
      setDiscount("");
      setTotalPrice("");
      setIsEdit(false);
      setId(0);
    }
  };
  const removeOrder = (id) => {
    if (!window.confirm("Are you sure you want to delete this Product?")) {
      return;
    }
    const newSalesorder = SalesOrder.filter((item) => item.id !== id);
    setSalesOrder(newSalesorder);
  };
  const Editorder = (id) => {
    const newSalesorder = SalesOrder.find((item) => item.id === id);
    const {
      customerName,
      regDate,
      productName,
      quantity,
      orginalPrice,
      discount,
      totalPrice,
    } = newSalesorder;
    setCustomerName(customerName);
    setProductName(productName);
    setRegDate(regDate);
    setQuantity(quantity);
    setOrginalPrice(orginalPrice);
    setDiscount(discount);
    setTotalPrice(totalPrice);
    setIsEdit(true);
    setId(id);
  };
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex justify-center">
        <div className="w-full m-9 bg-white mt-10 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-5 text-center">Sales Order</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="customerName">Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  placeholder="Enter Customer Name"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className="w-1/2 gap-6">
                <label htmlFor="Date">Date</label>
                <input
                  type="date"
                  name="Date"
                  placeholder="Enter Date"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                  value={regDate}
                  onChange={(e) => setRegDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="product">Product</label>
                <input
                  type="text"
                  name="product"
                  placeholder="Enter Product"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="w-1/2 gap-6">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter Quantity"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="orginalPrice">Orginal Price</label>
                <input
                  type="number"
                  name="orginalPrice"
                  placeholder="Enter Orginal Price"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                  value={orginalPrice}
                  onChange={(e) => setOrginalPrice(e.target.value)}
                />
              </div>
              <div className="w-1/2 gap-6">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  name="discount"
                  placeholder="Enter Discount"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="w-1/2 flex justify-start">
                <button className="bg-blue-500 text-white px-2 py-2 rounded-lg w-[30%] mt-6 ml-2 font-bold">
                  {isEdit ? "update" : "AddCart"}
                </button>
              </div>
            </div>
          </form>
          <div className="mt-10">
            <div className="overflow-y-auto h-48 w-full">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Orginal Price</th>
                    <th className="px-4 py-2">Discount</th>
                    <th className="px-4 py-2">Total Price</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {SalesOrder.map((item) => {
                    const {
                      id,
                      customerName,
                      productName,
                      regDate,
                      quantity,
                      orginalPrice,
                      discount,
                      totalPrice,
                    } = item;
                    return (
                      <tr key={id}>
                        <td className="border px-4 py-2">{customerName} </td>
                        <td className="border px-4 py-2">{regDate} </td>
                        <td className="border px-4 py-2">{productName} </td>
                        <td className="border px-4 py-2">{quantity} </td>
                        <td className="border px-4 py-2">{orginalPrice} </td>
                        <td className="border px-4 py-2">{discount} </td>
                        <td className="border px-4 py-2">
                          {orginalPrice * quantity - discount}{" "}
                        </td>
                        <td className="border px-4 py-2 flex gap-2">
                          <button
                            className="bg-green-500 text-white px-2 py-2 rounded-lg "
                            onClick={() => Editorder(id)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-2 rounded-lg mr-0"
                            onClick={() => removeOrder(id)}
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
  );
};

export default SalesOrder;
