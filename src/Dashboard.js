import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaUserPlus,
  FaFileInvoice,
  FaBoxOpen,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

import Products from "./Files/Products";
import Customers from "./Files/Customers";

import SalesOrder from "./Files/SalesOder";
import Home from "./Files/Home";
import Userlist from "./Files/Userlist";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-200">
        <div className="flex flex-col flex-shrink-0 bg-gray-800 text-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            className="bg-gray-900 text-white block px-3 py-2 rounded-md  font-medium text-2xl"
            aria-current="page"
          >
            <span className="font-semibold text-xl tracking-tight">
              Dashboard
            </span>
          </div>
          <div className="flex flex-col justify-between flex-1 h-0 overflow-y-auto">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaHome className="w-5 h-5" />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/userlist"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaUser className="w-5 h-5" />
                  <span className="ml-2">Users</span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/products"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaBoxOpen className="w-5 h-5" />
                  <span className="ml-2">Products</span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/customers"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaUserPlus className="w-5 h-5" />
                  <span className="ml-2">Customers</span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/salesorder"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaFileInvoice className="w-5 h-5" />
                  <span className="ml-2">Sales Order</span>
                </Link>
              </li>
              <li className="px-5">
                <Link
                  to="/reports"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaChartBar className="w-5 h-5" />
                  <span className="ml-2">Reports</span>
                </Link>
              </li>
            </ul>

            <div className="px-5 mt-5">
              <button
                type="button"
                className="flex items-center justify-center px-2 py-2 text-sm font-medium leading-snug text-red-500 rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
              >
                <FaSignOutAlt className="w-5 h-5" />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-col w-full h-full overflow-x-hidden border-t">
            <main className="flex flex-col flex-1">
              <div className="flex flex-col flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/userlist" element={<Userlist />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/salesorder" element={<SalesOrder />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Dashboard;
