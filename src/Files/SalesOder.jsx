import React from "react";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaCog,
  FaFileInvoice,
} from "react-icons/fa";
import { fetchProducts } from "../services/api-calls";
// fa icon sales order

import useSWR from "swr";

const SalesOrder = () => {
  const { data, isLoading } = useSWR("/products", fetchProducts);
  const [query, setQuery] = React.useState("");

  const searchingProduct = filteredArray(data, query);
  return (
    <div class="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
      <div class="flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">
        <div class="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-cyan-500 rounded-3xl">
          <Link
            href="#"
            class="flex items-center justify-center h-12 w-12 bg-cyan-50 text-cyan-700 rounded-full"
          >
            <FaFileInvoice className="w-6 h-6" />
          </Link>
          <ul class="flex flex-col space-y-2 mt-12">
            <li>
              <Link href="#" class="flex items-center">
                <span class="flex items-center justify-center h-12 w-12 rounded-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" class="flex items-center">
                <span class="flex items-center justify-center text-cyan-100 hover:bg-cyan-400 h-12 w-12 rounded-2xl">
                  <FaCog className="w-6 h-6" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* content menu */}
      <div class="flex-grow flex">
        <div class="flex flex-col bg-blue-gray-50 h-full w-full py-4">
          <div class="flex px-2 flex-row relative">
            <div class="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              class="bg-white rounded-3xl shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
              placeholder="Cari menu ..."
              //x-model="keyword"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="h-full overflow-hidden mt-4">
            <div className="h-full overflow-y-auto px-2">
              <div class="grid grid-cols-3 gap-4 pb-3 ">
                {isLoading && <p>Loading...</p>}
                {searchingProduct?.map((product) => {
                  const { _id, name, cost } = product;
                  return (
                    <div
                      key={_id}
                      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                      role="button"
                    >
                      <div class="flex items-center justify-between px-4 py-3 border-b">
                        <img
                          class="p-8 rounded-t-lg"
                          src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="px-5 pb-5">
                        <div className="flex justify-between">
                          <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            {name}
                          </h5>
                        </div>

                        <div class="flex justify-between mt-2">
                          <span class="text-2xl font-bold text-gray-900 dark:text-white">
                            ${cost}
                          </span>
                          <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-[50%] bg-white rounded-3xl shadow-lg">
          <div class="flex flex-row justify-between items-center px-4 py-3 border-b">
            <button class="flex items-center justify-center px-4 py-2 text-sm text-red-500 rounded-md">
              <FaTrash className="w-4 h-4 mr-2" />
            </button>

            <button class="flex items-center justify-center px-4 py-2 text-sm text-green-600 rounded-md">
              <FaShoppingCart className="w-4 h-4 mr-2" />
            </button>
          </div>

          <div class="flex flex-col flex-grow overflow-hidden">
            <div class="flex flex-col flex-grow overflow-y-auto">
              <div class="flex flex-col">
                <div class="flex flex-row justify-between items-center px-4 py-3 border-b bg-gray-100 m-3">
                  <div className="flex items-center">
                    <img
                      src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">samsung a23</p>
                      <p className="text-xs text-gray-500">$160</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-600 hover:text-gray-800  font-bold py-2 px-4 rounded-full">
                      <FaMinus />
                    </button>
                    <p className="px-2">1</p>
                    <button className="text-gray-600 hover:text-gray-800   font-bold py-2 px-4 rounded-full">
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center px-4 py-3 border-b bg-gray-100 m-3">
                  <div className="flex items-center">
                    <img
                      src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">samsung a23</p>
                      <p className="text-xs text-gray-500">$160</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-600 hover:text-gray-800  font-bold py-2 px-4 rounded-full">
                      <FaMinus />
                    </button>
                    <p className="px-2">1</p>
                    <button className="text-gray-600 hover:text-gray-800   font-bold py-2 px-4 rounded-full">
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center px-4 py-3 border-b bg-gray-100 m-3 ">
                  <div className="flex items-center">
                    <img
                      src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">samsung a23</p>
                      <p className="text-xs text-gray-500">$160</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-600 hover:text-gray-800  font-bold py-2 px-4 rounded-full">
                      <FaMinus />
                    </button>
                    <p className="px-2">1</p>
                    <button className="text-gray-600 hover:text-gray-800   font-bold py-2 px-4 rounded-full">
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center px-4 py-3 border-b bg-gray-100 m-3 ">
                  <div className="flex items-center">
                    <img
                      src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-sm-a505f-ds-1.jpg"
                      alt=""
                      className="object-cover w-12 h-12"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">samsung a23</p>
                      <p className="text-xs text-gray-500">$160</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-600 hover:text-gray-800  font-bold py-2 px-4 rounded-full">
                      <FaMinus />
                    </button>
                    <p className="px-2">1</p>
                    <button className="text-gray-600 hover:text-gray-800   font-bold py-2 px-4 rounded-full">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-center px-4 py-3 border-t">
            <p class="text-xl font-semibold">Total</p>
            <p class="text-xl font-semibold">$640</p>
          </div>

          <div class="flex flex-row justify-between items-center px-4 py-3 border-t">
            <button class="flex items-center justify-center px-4 py-2 text-white font-bold w-full bg-cyan-500 rounded-md ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  function filteredArray(arr, query) {
    return arr?.filter((el) => {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
};

export default SalesOrder;
