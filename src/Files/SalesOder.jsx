import React, { useState } from "react";

const SalesOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [Date, setDate] = useState("");
  const [product, setProduct] = useState("");
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
      const newSalesOrder = {
        id: new Date().getTime().toString(),
        customerName,
        Date,
        product,
        quantity,
        orginalPrice,
        discount,
        totalPrice,
      };
      if (
        customerName === "" ||
        Date === "" ||
        product === "" ||
        quantity === "" ||
        orginalPrice === "" ||
        discount === "" ||
        totalPrice === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
      setSalesOrder([...SalesOrder, newSalesOrder]);
      setCustomerName("");
      setDate("");
      setProduct("");
      setQuantity("");
      setOrginalPrice("");
      setDiscount("");
      setTotalPrice("");
    } else {
      const newSalesOrder = SalesOrder.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            customerName,
            Date,
            product,
            quantity,
            orginalPrice,
            discount,
            totalPrice,
          };
        }
        return item;
      });
      setSalesOrder(newSalesOrder);
      setCustomerName("");
      setDate("");
      setProduct("");
      setQuantity("");
      setOrginalPrice("");
      setDiscount("");
      setTotalPrice("");
      setIsEdit(false);
    }
  };

  const removeItem = (id) => {
    if (window.confirm("Are you sure to delete this item?")) {
      return;
    }
    const newSalesOrder = SalesOrder.filter((item) => item.id !== id);
    setSalesOrder(newSalesOrder);
  };
  const editItem = (id) => {
    const newSalesOrder = SalesOrder.find((item) => item.id === id);
    setCustomerName(newSalesOrder.customerName);
    setDate(newSalesOrder.Date);
    setProduct(newSalesOrder.product);
    setQuantity(newSalesOrder.quantity);
    setOrginalPrice(newSalesOrder.orginalPrice);
    setDiscount(newSalesOrder.discount);
    setTotalPrice(newSalesOrder.totalPrice);
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
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter Customer Name"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>
              <div className="w-1/2 gap-6">
                <label htmlFor="Date">Date</label>
                <input
                  type="date"
                  name="Date"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Enter Date"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="product">Product</label>
                <input
                  type="text"
                  name="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="Enter Product"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>
              <div className="w-1/2 gap-6">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter Quantity"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="orginalPrice">Orginal Price</label>
                <input
                  type="number"
                  name="orginalPrice"
                  value={orginalPrice}
                  onChange={(e) => setOrginalPrice(e.target.value)}
                  placeholder="Enter Orginal Price"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>
              <div className="w-1/2 gap-6">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  name="discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Enter Discount"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="totalPrice">Total Price</label>
                <input
                  type="number"
                  name="totalPrice"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(e.target.value)}
                  placeholder="Enter Total Price"
                  className="bg-white border-2 w-full p-2 rounded-lg"
                />
              </div>

              <div className="w-1/2 flex justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[50%] mt-6 ">
                  {isEdit ? "Edit" : "Add"}
                </button>
              </div>
            </div>
          </form>
          <div className="mt-10">
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
                    Date,
                    product,
                    quantity,
                    orginalPrice,
                    discount,
                    totalPrice,
                  } = item;
                  return (
                    <tr key={id}>
                      <td className="border px-4 py-2">{customerName}</td>
                      <td className="border px-4 py-2">{Date}</td>
                      <td className="border px-4 py-2">{product}</td>
                      <td className="border px-4 py-2">{quantity}</td>
                      <td className="border px-4 py-2">{orginalPrice}</td>
                      <td className="border px-4 py-2">{discount}</td>
                      <td className="border px-4 py-2">{totalPrice}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => editItem(id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => removeItem(id)}
                        >
                          Delete
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
  );
};

export default SalesOrder;
