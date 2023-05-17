import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  FaHome,
  FaUser,
  FaUserPlus,
  FaFileInvoice,
  FaBoxOpen,
  FaChartBar,
  FaSignOutAlt,
  FaListAlt,
} from "react-icons/fa";
//import { FaBars } from "react-icons/fa";
//  fa-bars import { FaBars } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Contextapi from "./Files/Contextapi";

import Products from "./Files/Products";
import Customers from "./Files/Customers";

import SalesOrder from "./Files/SalesOder";
import Home from "./Files/Home";
import Userlist from "./Files/Userlist";
import Category from "./Files/Category";
import ProductList from "./Files/ProductList";
import Reports from "./Files/Report";
import CustomerReport from "./Files/CustomerReport";
import CategoryReport from "./Files/CategoryReport";
import ProductReport from "./Files/ProductReport";
import UserReport from "./Files/UserReport";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // const [product, setProduct] = useState([]);

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-200">
        <div className="flex flex-col flex-shrink-0 bg-gray-800 text-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            className="bg-gray-900 text-white block px-3 py-2 rounded-md  font-medium text-2xl"
            aria-current="page"
          >
            <div className="flex items-center justify-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQdZn8r9J-MQ8_DwiVN4-XbkhUw7YeI_gNw&usqp=CAU"
                alt="profile"
              />
              <span className="ml-3 text-xl font-bold">Inventory</span>
            </div>
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
                <button
                  onClick={() => setShow(!show)}
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white focus:outline-none"
                >
                  <FaBoxOpen className="w-5 h-5" />
                  <span className="ml-2">Products</span>
                </button>
                {show ? (
                  <ul className="flex flex-col py-4 space-y-1">
                    <div className="px-5">
                      <Link
                        to="/products"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaBoxOpen className="w-5 h-5" />
                        <span className="ml-2">Add Products</span>
                      </Link>
                    </div>
                    <div className="px-5">
                      <Link
                        to="/ProductList"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaListAlt className="w-5 h-5" />
                        <span className="ml-2">Products List</span>
                      </Link>
                    </div>
                  </ul>
                ) : null}
              </li>
              <li className="px-5">
                <Link
                  to="/category"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaListAlt className="w-5 h-5" />
                  <span className="ml-2">Category</span>
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
              {/* <li className="px-5">
                <Link
                  to="/reports"
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                >
                  <FaChartBar className="w-5 h-5" />
                  <span className="ml-2">Reports</span>
                </Link>
              </li>
            </ul> */}
              <li className="px-5">
                <button
                  onClick={() => setShowReport(!showReport)}
                  className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white focus:outline-none"
                >
                  <FaChartBar className="w-5 h-5" />
                  <span className="ml-2">Reports</span>
                </button>

                {showReport ? (
                  <ul className="flex flex-col py-4 space-y-1">
                    <div className="px-5">
                      <Link
                        to="/customerreport"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaChartBar className="w-5 h-5" />
                        <span className="ml-2">Customer Reports</span>
                      </Link>
                    </div>
                    <div className="px-5">
                      <Link
                        to="/reports"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaChartBar className="w-5 h-5" />
                        <span className="ml-2">Sales Order Reports</span>
                      </Link>
                    </div>
                    <div className="px-5">
                      <Link
                        to="/CategoryReport"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaChartBar className="w-5 h-5" />
                        <span className="ml-2">Categories Reports</span>
                      </Link>
                    </div>
                    <div className="px-5">
                      <Link
                        to="/productReport"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaChartBar className="w-5 h-5" />
                        <span className="ml-2">Products Reports</span>
                      </Link>
                    </div>
                    <div className="px-5">
                      <Link
                        to="/userReport"
                        className="flex items-center px-2 py-2 text-sm font-medium leading-snug text-white rounded-md dark-mode:text-gray-200 hover:bg-gray-700 dark-mode:hover:bg-white"
                      >
                        <FaChartBar className="w-5 h-5" />
                        <span className="ml-2">User Reports</span>
                      </Link>
                    </div>
                  </ul>
                ) : null}
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
                {/* <Contextapi.Provider value={{ product, setProduct }}> */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/userlist" element={<Userlist />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/edit-product/:id" element={<Products />} />
                  <Route path="/ProductList" element={<ProductList />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/salesorder" element={<SalesOrder />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/customerreport" element={<CustomerReport />} />
                  <Route path="/CategoryReport" element={<CategoryReport />} />
                  <Route path="/productReport" element={<ProductReport />} />
                  <Route path="/userReport" element={<UserReport />} />
                </Routes>
                {/* </Contextapi.Provider> */}
              </div>
            </main>
          </div>
        </div>
      </div>

      <ToastContainer />
    </BrowserRouter>
  );
};
export default Dashboard;
