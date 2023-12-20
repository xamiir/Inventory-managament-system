import { useEffect, useState } from "react";
import { loginUser } from "../services/api-calls";
import { toast } from "react-toastify";
import { useNavigate, } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      navigate("/home", { replace: true });
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
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Password
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
            
              </div>
            </div>
            <div className="mb-5">
              <input
                 type="checkbox"
                 id="showPassword"
                 onChange={() => setShowPassword(!showPassword)}
                
                className="mr-2 leading-tight"
              />
              <label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">
              Show Password
              </label>
            </div>

            <button
              type="submit"
              className="block w-full bg-indigo-500 p-4 rounded text-indigo-100"
            >
              Login
            </button>
          </form>
          <div className="text-center">
            <span className="text-sm">Don't have an account yet?</span>
            <Link to="/signup" className="text-indigo-400 hover:text-indigo-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
