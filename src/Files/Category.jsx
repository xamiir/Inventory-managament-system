import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDate, setCategoryDate] = useState("");
  const [category, setCategory] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [model, setModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      const newCategory = {
        id: new Date().getTime().toString(),
        categoryName,
        categoryDate,
      };
      if (categoryName === "" || categoryDate === "") {
        alert("Please fill all the fields");
        return;
      }
      setCategory([...category, newCategory]);
      setCategoryName("");
      setCategoryDate("");
    } else {
      const newCategory = category.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            categoryName,
            categoryDate,
          };
        }
        return item;
      });
      setCategory(newCategory);
      setCategoryName("");
      setCategoryDate("");
      setIsEdit(false);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) {
      return;
    }
    const newCategory = category.filter((item) => item.id !== id);
    setCategory(newCategory);
  };

  const handleEdit = (id) => {
    const editCategory = category.find((item) => item.id === id);
    setIsEdit(true);
    setId(id);
    setCategoryName(editCategory.categoryName);
    setCategoryDate(editCategory.categoryDate);
  };

  const handleModel = () => {
    setModel(true);
  };

  const handleModelClose = () => {
    setModel(false);
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      <div className="w-full m-9 bg-white ">
        <div className="flex justify-between items-center"></div>
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl text-black font-semibold m-4">Category</h1>
          <button
            onClick={handleModel}
            className="px-4 py-2 bg-green-500 text-white rounded-md m-4"
          >
            Add Category
          </button>
        </div>
        <div className="flex flex-col mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category Name
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.map((item) => {
                      const { id, categoryName, categoryDate } = item;
                      return (
                        <tr key={id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {categoryName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {categoryDate}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => {
                                handleModel();
                                handleEdit(id);
                              }}
                              className="text-green-600 hover:text-igreen-900 "
                            >
                              <FaEdit className="text-green-600 hover:text-igreen-900" />
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleDelete(id)}
                              className="text-red-600 hover:text-indigo-900"
                            >
                              <FaTrash className="text-red-600 hover:text-indigo-900" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {model && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 "></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M8 11a4 4 0 118 0 4 4 0 01-8 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Add Category
                    </h3>
                    <div className="mt-2">
                      <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Category Name
                            </label>
                            <input
                              onChange={(e) => setCategoryName(e.target.value)}
                              value={categoryName}
                              name="categoryName"
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              placeholder="Category Name"
                            />
                            <p className="text-red-500 text-xs italic">
                              Please fill out this field.
                            </p>
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-last-name"
                            >
                              Category Date
                            </label>
                            <input
                              onChange={(e) => setCategoryDate(e.target.value)}
                              value={categoryDate}
                              name="categoryDate"
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="date"
                              placeholder="Category Date"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  onClick={handleModelClose}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Category;
