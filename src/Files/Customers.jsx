import { useState } from "react";

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
  const [model, setModel] = useState(false);

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

  const openModel = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      <div className="w-full m-9 bg-white ">
        <div className={addStyle.pl}>
          <div className="div7">
            <div className="div8">
              <h1 className="div9">Customer List</h1>
              <div className="flex justify-end mb-4">
                <button
                  onClick={openModel}
                  className="bg-green-500 text-white px-4 py-2 rounded font-medium mr-2"
                >
                  Add newCustomer
                </button>
              </div>
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
                              onClick={() => {
                                openModel();
                                editCustomer(id);
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="delete-button"
                              onClick={() => removeCustomer(id)}
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
          {model && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg w-1/3">
                <div className="flex justify-end">
                  <button onClick={closeModel} className="text-3xl">
                    &times;
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="px-8 py-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      CustomerName
                    </label>
                    <input
                      type="text"
                      value={CustomerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={Address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      onClick={closeModel}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
