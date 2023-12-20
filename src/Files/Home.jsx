import React from "react";
import { useState, useEffect } from "react";
import {
  fetchCustomerCount,
  fetchProductCount,
  fetchCategoryCount,
  fetchUserCount,
} from "../services/api-calls";

const Report = () => {
  const [customerCount, setCustomerCount] = useState("0");
  const [productCount, setProductCount] = useState("0");
  const [userCount, setUserCount] = useState("0");
  const [categoryCount, setCategoryCount] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await fetchCustomerCount();
        const productResponse = await fetchProductCount();
        const categoryResponse = await fetchCategoryCount();
        const userResponse = await fetchUserCount();

        setCustomerCount(String(customerResponse.count));
        setProductCount(String(productResponse.count));
        setCategoryCount(String(categoryResponse.count));
        setUserCount(String(userResponse.count));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <div className="flex flex-wrap justify-center items-center">
        {/* Total Sales */}
        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-blue-500 hover:bg-blue-600 border rounded shadow transition duration-300">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-white">Total Sales</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
                $3249
              </p>
              <p className="text-sm text-center text-white">0.5% Target</p>
            </div>
          </div>
        </div>

        {/* Total Customer */}
        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-green-500 hover:bg-green-600 border rounded shadow transition duration-300">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-white">Total Customer</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
                {customerCount}
              </p>
              <p className="text-sm text-center text-white">
                {customerCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>

        {/* Total Products */}
        <div className="w-full lg:w-1/3 xl:w-1/3 p-3 ">
          <div className="bg-yellow-500 hover:bg-yellow-600 border rounded shadow transition duration-300">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-white">Total Products</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
                {productCount}
              </p>
              <p className="text-sm text-center text-white">
                {productCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row mt-8">
        {/* Total Categories */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-indigo-500 hover:bg-indigo-600 border rounded shadow transition duration-300">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-white">Total Categories</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
                {categoryCount}
              </p>
              <p className="text-sm text-center text-white">
                {categoryCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-purple-500 hover:bg-purple-600 border rounded shadow transition duration-300">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-white">Total Revenue</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
                $5689
              </p>
              <p className="text-sm text-center text-white">
                {5689 / 100} % From Last month
              </p>
            </div>
          </div>
        </div>

        {/* Total Users */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-red-500 hover:bg-red-600 border rounded shadow transition duration-300">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-white">Total Users</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
                {userCount}
              </p>
              <p className="text-sm text-center text-white">
                {userCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
