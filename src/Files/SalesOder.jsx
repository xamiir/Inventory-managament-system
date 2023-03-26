
const SalesOrder = () => {
    return (
      // sales order desing here
      <div className="bg-gray-100 h-screen">
        <div className="flex justify-center">
        <div className="w-full m-6 bg-white mt-10 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-1 text-center">Sales Order</h1>
        <form action="">
        <div className="mb-4 flex justify-between  ">
            <label htmlFor="name" className="sr-only">Customer Name</label>
            <select name="CustomerName" id="CustomerName" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"placeholder="Select customer name">
            <option value="CustomerName">Select CustomerName</option>
            <option value="CustomerName">maxmed ali</option>
            <option value="CustomerName">nuur jamac</option>
            <option value="CustomerName">xaliimo siyad</option>
            </select>
            <label htmlFor="price" className="sr-only">Date</label>
            <input type="date" name="Date" id="Date" placeholder="Enter Date" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
            </div>
            <div className="mb-4 flex justify-between ">
            <label htmlFor="description" className="sr-only">Product Name</label>
            <select name="ProductName" id="ProductName" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"placeholder="Select product name">
            <option value="ProductName">Select ProductName</option>
            <option value="ProductName">samsung A12 128Gb</option>
            <option value="ProductName">samsung A14 128Gb</option>
            <option value="ProductName">T 101</option>
            </select>
            <label htmlFor="description" className="sr-only">Quantity</label>
            <input type="number" name="Quantity" id="Quantity" placeholder="Enter Quantity" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
            </div>
            <div className="mb-4 flex justify-between ">
            <label htmlFor="description" className="sr-only">Sales Price</label>
            <input type="number" name="SalesPrice" id="SalesPrice" placeholder="Enter Sales Price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
            <label htmlFor="description" className="sr-only">Total Price</label>
            <input type="number" name="TotalPrice" id="TotalPrice" placeholder="Enter Total Price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
            </div>
            <div className="mb-4 flex justify-between ">
            <label htmlFor="description" className="sr-only">Discount</label>
            <input type="number" name="Discount" id="Discount" placeholder="Enter Discount" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
            <label htmlFor="description" className="sr-only">Net Price</label>
            <input type="number" name="NetPrice" id="NetPrice" placeholder="Enter Net Price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
            </div>
            <div className="mb-4 ">
            <button className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-52">AddCart</button>
           
             
            </div>
            <div  className="mb-4 mt-0 flex justify-center">
            <div className="w-full m-2 bg-white mt-10 p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-1 text-center">Cart</h1>
            <table className="table-auto w-full">
            <thead>
            <tr>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Sales Price</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Discount</th>
            <th className="px-4 py-2">Net Price</th>
            <th className="px-4 py-2">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td className="border px-4 py-2">Elmi osman </td>
            <td className="border px-4 py-2">2021-10-10</td>
            <td className="border px-4 py-2">samsung A12 128Gb</td>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">180</td>
            <td className="border px-4 py-2">360</td>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">355</td>
            <td className="border px-4 py-2 flex justify-between gap-2 ">
            <button className="bg-green-500 text-white px-10 py-2 rounded font-medium">Edit</button>
            <button className="bg-red-500 text-white px-10 py-2 rounded font-medium">Delete</button>
            </td>


            </tr>
            </tbody>
            </table>
            </div>

            </div>
            </form>
            </div>
            </div>
            </div>
      
    )
}
export default SalesOrder