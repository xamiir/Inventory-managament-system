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

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex justify-center">
        <div className="w-full m-9 bg-white mt-10 p-6 rounded-lg">
          <h1 className="text-2xl font-medium mb-1 text-center">User List</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-between">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"
              />
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"
              />
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"
              />
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"
              />
            </div>
            <div className="mb-4 flex justify-start">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded font-medium"
              >
                {isEdit ? "Update" : "Add"}
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <div className="w-full">
              <h1 className="text-3xl font-bold text-gray-600  text-center mb-6">
                Product List
              </h1>
              <div className="overflow-y-auto h-48 w-full">
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
                      const { id, name, username, email, phone, password } =
                        item;
                      return (
                        <tr key={id}>
                          <td className="border px-4 py-2">{name}</td>
                          <td className="border px-4 py-2">{username}</td>
                          <td className="border px-4 py-2">{email}</td>
                          <td className="border px-4 py-2">{phone}</td>
                          <td className="border px-4 py-2">{password}</td>
                          <td className="border px-4 py-2">
                            <button
                              onClick={() => editUser(id)}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Userlist;
