

const Product =()=>{
    return(
      //product Add new product
        <div className ="bg-gray-100 h-screen ">
            <div className="flex justify-center">
                <div className="w-1/2 bg-white mt-10 p-6 rounded-lg">
                    <h1 className="text-2xl font-medium mb-1">Add New Product</h1>
                    <form action="">
                        <div className="mb-4">  
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" className="bg-white border-2 w-full p-2 rounded-lg flex justify-between" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="sr-only">Price</label>
                            <input type="text" name="price" id="price" placeholder="Price" className="bg-white border-2 w-full p-2 rounded-lg flex justify-between" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="sr-only">Description</label>
                            <input type="text" name="description" id="description" placeholder="Description" className="bg-white border-2 w-full p-4 rounded-lg flex justify-between" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category" className="sr-only">Category</label>
                            <input type="text" name="category" id="category" placeholder="Category" className="bg-white border-2 w-full p-2 rounded-lg flex justify-between" />
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-52">Add Product</button>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td className="border px-4 py-2"> samsung A23 128GB</td>
                                    <td className="border px-4 py-2">260$</td>
                                    <td className="border px-4 py-2">android 13</td> 
                                    <td className="border px-4 py-2">mobile</td>  
                                </tr>
                                <tr>
                                    
                                    <td className="border px-4 py-2">T 101</td>
                                    <td className="border px-4 py-2">10</td>
                                    <td className="border px-4 py-2">Tecno </td> 
                                    <td className="border px-4 py-2">mobile</td>  
                                </tr>
                               
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        </div>


                       
                       
    )

}
export default Product