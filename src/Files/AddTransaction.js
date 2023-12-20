import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for redirection
import useAuth from "../context/useAuth";
import { fetchCurrencies, addTransaction } from "../services/api-calls";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    amount: "",
    currencyFrom: "",
    currencyTo: "",
  });

  const { user } = useAuth();
  const [currencies, setCurrencies] = useState([]);
// Create history object for redirection
  const   navigate = useNavigate();

  useEffect(() => {
    // Fetch currencies when the component mounts
    fetchCurrencyData();
  }, []);

  const fetchCurrencyData = async () => {
    try {
      const currenciesData = await fetchCurrencies();
      setCurrencies(currenciesData);
    } catch (error) {
      // Handle error if needed
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        formData.amount === "" ||
        formData.currencyFrom === "" ||
        formData.currencyTo === ""
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      else if (formData.currencyFrom === formData.currencyTo) {
        toast.error("Currency From and Currency To cannot be same");
        return;
      }
      // Attempt to add transaction
      
      // const exchangeRate = 1.0;
      // await addTransaction(formData, exchangeRate, user !== null ? user._id : null);
      // console.log("Transaction successful");
      // toast.success("Transaction successful");

      // // Redirect to TransactionList upon successful transaction
      // navigate("/transactions");
      else{
      const exchangeRate = 1.0;
      await addTransaction(formData, exchangeRate, user !== null ? user._id : null);
      console.log("Transaction successful");
      toast.success("Transaction successful");

      // Redirect to TransactionList upon successful transaction
      navigate("/transactions");
      
      }
    } catch (error) {
      // Error handling
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Add Transaction</h1>
      <div className="flex flex-col justify-between px-4 py-3 border-b">
        <label className="text-xl font-semibold ml-0">User Transaction by:</label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1 w-[67%]"
          disabled
          name="customer"
          defaultValue={
            user !== null ? user.name : "Please login to place an order"
          }
        />
      </div>
      <form onSubmit={handleSubmit} className="w-[100%] shadow-lg p-6 bg-white rounded-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Amount:
          </label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Currency From:
          </label>
          <select
            name="currencyFrom"
            value={formData.currencyFrom}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency._id} value={currency._id}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Currency To:
          </label>
          <select
            name="currencyTo"
            value={formData.currencyTo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency._id} value={currency._id}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Exchange Money
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
