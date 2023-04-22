import { useState, useEffect } from "react";

import { FaEdit, FaTrash } from "react-icons/fa";
import addStyle from "./AddCustomer.model.css";

const Customers = () => {
  const [CustomerName, setCustomerName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Customer, setCustomer] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      const newCustomer = {
        id: new Date().getTime().toString(),
        CustomerName,
        PhoneNumber,
        Address,
        Email,
      };
      if (
        CustomerName === "" ||
        PhoneNumber === "" ||
        Address === "" ||
        Email === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
      setCustomer([...Customer, newCustomer]);
      setCustomerName("");
      setPhoneNumber("");
      setAddress("");
      setEmail("");
    } else {
      const newCustomer = Customer.map((item) => {
        if (item.id === id) {
          return { ...item, CustomerName, PhoneNumber, Address, Email };
        }
        return item;
      });
      setCustomer(newCustomer);
      setCustomerName("");
      setPhoneNumber("");
      setAddress("");
      setEmail("");
      setIsEdit(false);
      setId(0);
    }
  };
  const removeCustomer = (id) => {
    if (!window.confirm("Are you sure you want to delete this Customer?")) {
      return;
    }
    const newCustomer = Customer.filter((item) => item.id !== id);
    setCustomer(newCustomer);
  };

  const editCustomer = (id) => {
    const newCustomer = Customer.find((item) => item.id === id);
    const { CustomerName, PhoneNumber, Address, Email } = newCustomer;
    setCustomerName(CustomerName);
    setPhoneNumber(PhoneNumber);
    setAddress(Address);
    setEmail(Email);
    setIsEdit(true);
    setId(id);
  };
  useEffect(() => {
    localStorage.getItem("CustomerKey", JSON.stringify(Customer));
  }, [Customer]);

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <h1 className="div4">Customer</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="div5">
              <label htmlFor="name" className="sr-only">
                Customer Name
              </label>
              <input
                type="text"
                name="CustomerName"
                id="CustomerName"
                placeholder="Enter Customer Name"
                className="input-control"
                value={CustomerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <label htmlFor="price" className="sr-only">
                Phone Number
              </label>
              <input
                type="text"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Enter Phone Number"
                className="input-control"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="div5 ">
              <label htmlFor="description" className="sr-only">
                Address
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Enter Address"
                className="input-control"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="description" className="sr-only">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Enter Email"
                className="input-control"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="div6 ">
              <button className="addButton">{isEdit ? "Edit" : "Add"}</button>
            </div>
          </form>

          <div className="div7">
            <div className="div8">
              <h1 className="div9">Customer List</h1>
              <div className="div10">
                <table className="table-control">
                  <thead>
                    <tr>
                      <th className="tr-control">Customer Name</th>
                      <th className="tr-control">Phone Number</th>
                      <th className="tr-control">Address</th>
                      <th className="tr-control">Email</th>
                      <th className="tr-control">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Customer.map((item) => {
                      const { id, CustomerName, PhoneNumber, Address, Email } =
                        item;
                      return (
                        <tr key={id}>
                          <td className="td-control">{CustomerName}</td>
                          <td className="td-control">{PhoneNumber}</td>
                          <td className="td-control">{Address}</td>
                          <td className="td-control">{Email}</td>
                          <td className="bnt-control">
                            <button
                              className="edit-button"
                              onClick={() => editCustomer(id)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="delete-button"
                              onClick={() => removeCustomer(id)}
                            >
                              <FaTrash />
                              {}
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

export default Customers;
