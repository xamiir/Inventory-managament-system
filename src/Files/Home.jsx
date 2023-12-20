import React from "react";
import { useState, useEffect } from "react";
// import { useNanvigate } from "react-router-dom";
import {

  fetchUserCount,
  //checkToken,
} from "../services/api-calls";

const Report = () => {
  
  const [userCount, setUserCount] = useState("0");
 
  useEffect(() => {
  

    const getUserCount = async () => {
      try {
        const response = await fetchUserCount();
        const count = response.count;
        setUserCount(String(count)); // Convert to string if needed
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    }
    getUserCount();
  }
  , []);

   
    

  // useEffect(() => {
  //   (async function checkIsAuth() {
  //     try {
  //       const res = await checkToken(token);
  //     } catch (error) {
  //       localStorage.removeItem("token");
  //       navigate("/login");
  //     }
  //   })();
  // }, [token]);

  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/3 xl:w-1/3 p-3">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">Total Transactions</h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                $3249
              </p>
              <p className="text-sm text-center text-gray-500">0.5% Target</p>
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

        <div className="w-full  lg:w-1/3 xl:w-1/3 p-3 ">
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <h5 className="font-bold uppercase text-gray-600">
              Total Currency 
              </h5>
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-center text-gray-800">
                249
              </p>
              <p className="text-sm text-center text-gray-500">
                 09% From Last month  
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      

     
  
  );
};

export default Report;
