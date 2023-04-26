import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaUserPlus,
  FaFileInvoice,
  FaBoxOpen,
  FaChartBar,
} from "react-icons/fa";

import Products from "./Files/Products";
import Customers from "./Files/Customers";

import SalesOrder from "./Files/SalesOder";
import Home from "./Files/Home";
import Userlist from "./Files/Userlist";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="bg-white h-screen ">
        <div
          className="bg-gray-800 "
          style={{ width: "15%", height: "100vh", float: "left" }}
        >
          <nav className="bg-gray-800 ">
            <div className="px-2 space-y-3 ">
              <Link
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md  font-medium text-2xl"
                aria-current="page"
              >
                {" "}
                Dashboard{" "}
              </Link>
              <Link
                to="/"
                className="text-white flex items-center space-x-2 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                <FaHome className="text-2xl" />
                <span>Home</span>
              </Link>
              <Link
                to="/customers"
                className="text-white flex items-center space-x-2 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                <FaUserPlus className="text-2xl" />
                <span>Customers</span>
              </Link>
              <Link
                to="/salesorder"
                className="text-white flex items-center space-x-2 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                <FaFileInvoice className="text-2xl" />
                <span>Sales Order</span>
              </Link>
              <Link
                to="/Products"
                className="text-white flex items-center space-x-2 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                <FaBoxOpen className="text-2xl" />
                <span>Products</span>
              </Link>
              <Link
                to="/Userlist"
                className="text-white flex items-center space-x-2 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                <FaUser className="text-2xl" />
                <span> User's</span>
              </Link>
              <Link
                to="/Report"
                className="text-white flex items-center space-x-2 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                <FaChartBar className="text-2xl" />
                <span>Reports</span>
              </Link>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/salesorder" element={<SalesOrder />} />
          <Route path="/Products" element={<Products />} />
          {/* <Route path="/adduser" element={<Adduser />} /> */}

          <Route path="/Userlist" element={<Userlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Dashboard;
