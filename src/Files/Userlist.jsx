import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import {
  fetchUsers,
  registerUser,
  deleteUser,
  updateUserByID,
} from "../services/api-calls";
import useSWR from "swr";
import { toast } from "react-toastify";

const Userlist = () => {
  const { data, isLoading, error, mutate } = useSWR("/users", fetchUsers);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [model, setModel] = useState(false);
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    } else if (password.length < 4 || password !== confirmPassword) {
      toast.error(
        "Password and Confirm Password must be same or password digits less then 4"
      );
      return;
    }

    try {
      const values = {
        name,
        email,
        phone,
        password,
      };
      const res = isEdit
        ? await updateUserByID(id, values)
        : await registerUser(values);
      mutate();
      toast.success(res.message);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setIsEdit(false);
      setId(0);
      setModel(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeUser = async (id) => {
    if (!window.confirm("Are you sure to delete this user?")) {
      return;
    }
    try {
      const res = await deleteUser(id);
      mutate();
      toast.success(res.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openModel = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
    setIsEdit(false);
    setId(0);
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  if (error)
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

  const filtered = filteredArray(data, query);
  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      <div className="w-full m-9 bg-white ">
        <div className="flex justify-between items-center m-4">
          <h1 className="text-3xl font-bold text-gray-600  text-center ">
            Users List
          </h1>
          <buttonm
            onClick={openModel}
            className="bg-green-500 text-white px-4 py-2 rounded font-medium mr-2"
          >
            Add User
          </buttonm>
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

        <div className="flex flex-col mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block  min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-100 ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="bg-gray-100">
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {isLoading && <h1>Loading....</h1>}
                    {filtered?.map((item) => {
                      const { _id, name, email, phone, password } = item;
                      return (
                        <tr key={_id}>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {name}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{email}</div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{phone}</div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-8">
                            <button
                              className="text-green-600 hover:text-green-900"
                              onClick={() => {
                                setIsEdit(true);
                                setId(_id);
                                setName(name);
                                setEmail(email);
                                setPhone(phone);
                                setPassword(password);
                                setConfirmPassword(password);
                                setModel(true);
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => removeUser(_id)}
                              className="text-red-600 hover:text-red-900"
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
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {isEdit ? "Update" : "Add"}
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
  );
};

function filteredArray(arr, query) {
  return arr?.filter((el) => {
    return (
      el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.email.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.phone.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.password.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  });
}

export default Userlist;
