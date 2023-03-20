


const Addpro = () => {
    return (
       <div className="bg-red-100 h-screen ">
            <div className="flex justify-center">
                <div className="w-full m-6 bg-white mt-10 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mb-1 text-center">Products</h1>
                    <form action="">
                        <div className="mb-4 flex justify-between  ">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter product name" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
                            <label htmlFor="price" className="sr-only">Price</label>
                            <input type="text" name="price" id="price" placeholder="Enter product price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
                            </div>
                            <div className="mb-4 flex justify-between ">
                            <label htmlFor="description" className="sr-only">Description</label>
                            <input type="text" name="description" id="description" placeholder="Enter product description" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
                            <label htmlFor="category" className="sr-only">Quantity</label>
                            <input type="text" name="quantity" id="quantity" placeholder="Enter product quantity" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
                        </div>
                        <div className="mb-4 flex justify-between ">
                            <label htmlFor="image" className="sr-only">Category</label>
                            <input type="text" name="Category" id="Category" placeholder="Enter product Category" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
                            <label htmlFor="quantity" className="sr-only">Total</label>
                            <input type="text" name="TotalPrice" id="TotalPrice" placeholder="TotalPrice" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" />
                        </div>
                        <div className="flex justify-start gap-4">
                        <button className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-52">Add Product</button>
                      
                        
                        <button className="bg-red-500 text-white px-4 py-3 rounded font-medium w-52">Delete Product</button>
                        <button className="bg-green-500 text-white px-4 py-3 rounded font-medium w-52">Update Product</button>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="w-full m-2 bg-white mt-10 p-6 rounded-lg">
                                <h1 className="text-2xl font-bold mb-1 text-center">Product List</h1>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">Name</th>
                                            <th className="px-4 py-2">Category</th>
                                            <th className="px-4 py-2">Description</th>
                                            <th className="px-4 py-2">Price</th>
                                            <th className="px-4 py-2">Quantity</th>
                                            <th className="px-4 py-2">TotalPrice</th>
                                        </tr>
                                    </thead>
                                 
                                       
                                    
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">samsung A23 128</td>
                                            <td className="border px-4 py-2">mobile</td>
                                            <td className="border px-4 py-2">Lorem ipsum dolor sit, ?</td>
                                            <td className="border px-4 py-2">180</td>
                                            <td className="border px-4 py-2">5</td>
                                            <td className="border px-4 py-2">900</td>
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
export default Addpro;