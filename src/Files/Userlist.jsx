import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [model, setModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      const newUser = {
        id: new Date().getTime().toString(),
        name,
        username,
        email,
        phone,
        password,
        confirmPassword,
      };
      if (
        name === "" ||
        username === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
      // check password and confirm password
      if (password.length < 4 || password !== confirmPassword) {
        alert(
          "Password and Confirm Password must be same or password digits less then 4"
        );
        return;
      }
      setUsers([...users, newUser]);
      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } else {
      const newUser = users.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name,
            username,
            email,
            phone,
            password,
            confirmPassword,
          };
        }
        return item;
      });
      setUsers(newUser);
      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setIsEdit(false);
      setId(0);
    }
  };

  const removeUser = (id) => {
    if (!window.confirm("Are you sure to delete this user?")) {
      return;
    }
    const newUser = users.filter((item) => item.id !== id);
    setUsers(newUser);
  };

  const editUser = (id) => {
    const specificUser = users.find((item) => item.id === id);
    setIsEdit(true);
    setId(id);
    setName(specificUser.name);
    setUsername(specificUser.username);
    setEmail(specificUser.email);
    setPhone(specificUser.phone);
    setPassword(specificUser.password);
    setConfirmPassword(specificUser.confirmPassword);
  };

  const openModel = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full ">
        <h1 className="text-3xl font-bold text-gray-600  text-center ">
          Users List
        </h1>
        <div className="flex justify-end mb-4">
          <button
            onClick={openModel}
            className="bg-green-500 text-white px-4 py-2 rounded font-medium mr-2"
          >
            Add User
          </button>
        </div>
        <div className="overflow-y-auto h-96 w-full">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Password</th>
                <th className="px-4 py-2">Edit</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                const { id, name, username, email, phone, password } = item;
                return (
                  <tr key={id}>
                    <td className="border px-4 py-2">{name}</td>
                    <td className="border px-4 py-2">{username}</td>
                    <td className="border px-4 py-2">{email}</td>
                    <td className="border px-4 py-2">{phone}</td>
                    <td className="border px-4 py-2">{password}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={isEdit ? openModel : editUser(id)}
                        className="bg-green-500 text-white px-4 py-2 rounded font-medium"
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded font-medium"
                        onClick={() => removeUser(id)}
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
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Username"
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
                  type="text"
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
  );
};
export default Userlist;
