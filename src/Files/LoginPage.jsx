import { useEffect, useState } from "react";
import { loginUser } from "../services/api-calls";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await loginUser(user);
    // response on the server
    if (response?.token) {
      toast.success("Login Sucessfully");
      localStorage.setItem("token", response?.token);
      localStorage.setItem("user", JSON.stringify(response?.user));
      // page reloads after login
      navigate("/");
    }
    response?.error && toast.error(response?.error);
  };

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  });

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 w-full"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-500 p-4 rounded text-indigo-100"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
