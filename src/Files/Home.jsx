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
    const getCustomerCount = async () => {
      try {
        const response = await fetchCustomerCount();
        const count = response.count;
        setCustomerCount(String(count)); // Convert to string if needed
      } catch (error) {
        console.error("Error fetching customer count:", error);
      }
    };
    getCustomerCount();
    const getProductCount = async () => {
      try {
        const response = await fetchProductCount();
        const count = response.count;
        setProductCount(String(count)); // Convert to string if needed
      } catch (error) {
        console.error("Error fetching product count:", error);
      }
    };
    getProductCount();

    const getCategoryCount = async () => {
      try {
        const response = await fetchCategoryCount();
        const count = response.count;
        setCategoryCount(String(count)); // Convert to string if needed
      } catch (error) {
        console.error("Error fetching category count:", error);
      }
    };
    getCategoryCount();

    const getUserCount = async () => {
      try {
        const response = await fetchUserCount();
        const count = response.count;
        setUserCount(String(count)); // Convert to string if needed
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };
    getUserCount();
  }, []);

  return (
    <div className=" bg-gray-100">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">Total Sales</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                $3249
              </p>
              <p className="text-sm text-center text-gray-500">0.5% Target</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Customer
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                {customerCount}
              </p>
              <p className="text-sm text-center text-gray-500">
                {customerCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>

        <div className="w-full  lg:w-1/3 xl:w-1/3 p-3 ">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Products
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                {productCount}
              </p>
              <p className="text-sm text-center text-gray-500">
                {productCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Categories
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                {categoryCount}
              </p>
              <p className="text-sm text-center text-gray-500">
                {categoryCount / 100} % From Last month
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
                Total Revenue
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                $5689
              </p>
              <p className="text-sm text-center text-gray-500">
                {5689 / 100} % From Last month
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                {userCount}
              </p>
              <p className="text-sm text-center text-gray-500">
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
