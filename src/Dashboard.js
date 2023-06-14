import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import DashboardSidebar from "./Component/DashboardSidebar";
import LoginPage from "./Files/LoginPage";
import PrivateRoute from "./Component/PrivateRoute";

const Dashboard = () => {
  // const [product, setProduct] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            element={
              <div className="flex h-screen bg-gray-200">
                <DashboardSidebar />
              </div>
            }
          >
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
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
};
export default Dashboard;
