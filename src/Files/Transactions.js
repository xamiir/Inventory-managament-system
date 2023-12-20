import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api-calls';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
   
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id);


  useEffect(() => {
    const getTransactions = async () => {
      try {
        const isAuthenticated = checkAuthentication();
    
        if (isAuthenticated) {
         // const userId = // Replace with actual userId or fetch it dynamically
         const  userId = user._id;
          const data = await fetchTransactions(userId);
          console.log('Fetched transactions:', data);
    
          if (data && data.length > 0) {
            setTransactions(data);
          } else {
            console.log('No transactions found in the data:', data);
          }
        } else {
          console.log('User not authenticated');
        }
    
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setLoading(false);
      }
    };

    getTransactions();
  }, [user._id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!transactions || transactions.length === 0) {
    console.log('No transactions found:', transactions); // Log the transactions array
    return <div>No transactions found.</div>;
  }

  return (
    <div>
      <h2>Transaction List</h2>
      <table className="table-auto min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              From
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              To
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Exchange Rate
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                {transaction.currencyFrom.name || 'N/A'}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {transaction.currencyTo.name || 'N/A'}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {transaction.amount || 'N/A'}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {transaction.exchangeRate || 'N/A'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;




const checkAuthentication = () => {
  // Replace this with your authentication logic
  return true;

 
};
