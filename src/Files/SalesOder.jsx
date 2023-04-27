import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import salesStyle from "./salesOrder.model.css";

const SalesOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [regDate, setRegDate] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orginalPrice, setOrginalPrice] = useState("");
  const [discount, setDiscount] = useState("");
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
      };
      if (
        customerName === "" ||
        regDate === "" ||
        productName === "" ||
        quantity === "" ||
        orginalPrice === "" ||
        discount === ""
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
    } = newSalesorder;
    setCustomerName(customerName);
    setProductName(productName);
    setRegDate(regDate);
    setQuantity(quantity);
    setOrginalPrice(orginalPrice);
    setDiscount(discount);
    setIsEdit(true);
    setId(id);
  };
  return (
    <div className={salesStyle.ok}>
      <div className="div1">
        <div className="child-container">
          <div className="div-container">
            <h1 className="tag-h1">Sales Order</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <div className="w-1/2">
                  <label htmlFor="customerName">Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    placeholder="Enter Customer Name"
                    autocomplete="on"
                    className="input-control"
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
                    className="input-control"
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
                    className="input-control"
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
                    className="input-control"
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
                    className="input-control"
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
                    className="input-control"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
              </div>
              <div className="bnt-contair ">
                <div className="bnt-con">
                  <button className="button-control">
                    {isEdit ? "update" : "sales"}
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-10">
              <div className="scrol-bal">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="th-control">Customer Name</th>
                      <th className="th-control">Date</th>
                      <th className="th-control">Product</th>
                      <th className="th-control">Quantity</th>
                      <th className="th-control">Orginal Price</th>
                      <th className="th-control">Discount</th>
                      <th className="th-control">Total Price</th>
                      <th className="th-control">Action</th>
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
                      } = item;
                      return (
                        <tr key={id}>
                          <td className="td-control">{customerName} </td>
                          <td className="td-control">{regDate} </td>
                          <td className="td-control">{productName} </td>
                          <td className="td-control">{quantity} </td>
                          <td className="td-control">{orginalPrice} </td>
                          <td className="td-control">{discount} </td>
                          <td className="td-control">
                            {orginalPrice * quantity - discount}
                          </td>
                          <td className="td-control flex gap-2">
                            <button
                              className="button-edit "
                              onClick={() => Editorder(id)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="button-delete"
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
    </div>
  );
};

export default SalesOrder;
