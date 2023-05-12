import { useState } from "react";

import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import addStyle from "./AddCustomer.model.css";
import {
  fetchCustomer,
  createCustomer,
  updateCustomerByID,
  deleteCustomer,
} from "../services/api-calls";
import useSWR from "swr";
import { toast } from "react-toastify";
const Customers = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "/customers",
    fetchCustomer
  );

  const [CustomerName, setCustomerName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [model, setModel] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!CustomerName || !PhoneNumber || !Address || !Email) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const values = {
        name: CustomerName,
        phone: PhoneNumber,
        address: Address,
        email: Email,
      };
      const res = isEdit
        ? await updateCustomerByID(id, values)
        : await createCustomer(values);

      toast.success(res.message);
      mutate();
      setCustomerName("");
      setPhoneNumber("");
      setAddress("");
      setEmail("");
      setModel(false);
      setIsEdit(false);
      setId(0);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeCustomer = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Customer?")) {
      return;
    }
    try {
      const res = await deleteCustomer(id);
      toast.success(res.message);
      mutate();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openModel = () => {
    setModel(true);
  };

  const closeModel = () => {
    setIsEdit(false);
    setModel(false);
  };
  const filteredData = filteredArray(data, query);

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
    <div className="flex justify-center">
      <div className="w-full m-4  ">
        <div className={addStyle.pl}>
          <div className="div7">
            <div className="div8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Customer List</h1>
                <button
                  onClick={openModel}
                  className="bg-green-500 text-white px-4 py-2 rounded font-medium mr-2"
                >
                  Add newCustomer
                </button>
              </div>
              <div className="flex justify-between items-center m-4">
                <div className="flex items-center">
                  <FaSearch className="text-gray-400 mr-2" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="outline-none  border-b-2 border-gray-400 "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="div10">
                <table className="table-control">
                  <thead>
                    <tr>
                      <th className=" bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider text-left px-8 py-4">
                        Customer Name
                      </th>
                      <th className="  bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider text-left px-8 py-4">
                        Phone Number
                      </th>
                      <th className=" bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider text-left px-8 py-4">
                        Address
                      </th>
                      <th className=" bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider text-left px-8 py-4">
                        Email
                      </th>
                      <th className=" bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider text-left px-8 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {isLoading ? (
                      <tr>
                        <td>Loading...</td>
                      </tr>
                    ) : (
                      filteredData?.map((item) => {
                        const { _id, name, phone, address, email } = item;
                        return (
                          <tr key={_id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {name}
                                  </div>
                                  <div className="text-sm text-gray-500"></div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {phone}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {address}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex flex-row">
                                <button
                                  className="text-green-500 hover:text-green-700  font-bold py-2 px-4 rounded-full"
                                  onClick={() => {
                                    setIsEdit(true);
                                    setId(_id);
                                    setCustomerName(name);
                                    setPhoneNumber(phone);
                                    setAddress(address);
                                    setEmail(email);
                                    openModel();
                                  }}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  className="text-red-500 hover:text-red-700  font-bold py-2 px-4 rounded-full"
                                  onClick={() => removeCustomer(_id)}
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
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
                      type="number"
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
                      {isEdit ? "Update" : "Create"}
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
  function filteredArray(arr, query) {
    return arr?.filter((el) => {
      return (
        el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        el.phone.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        el.address.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        el.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
  }
};

export default Customers;
