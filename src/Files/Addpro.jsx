import React, { useState } from 'react';


const Addpro = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [totalprice, setTotalPrice] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            price,
            description,
            category,
            quantity,
            totalprice
        }
        if (name === '' || price === '' || description === '' || category === '' || quantity === '' || totalprice === '') {
            alert('Please fill all the fields');
            return;
        }
        
        setData([...data, newProduct]);
        setName('');
        setPrice('');
        setDescription('');
        setCategory('');
        setQuantity('');
        setTotalPrice('');
       
    }


    
    return (
       <div className="bg-gray-100 h-screen ">
            <div className="flex justify-center">
                <div className="w-full m-6 bg-white mt-10 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mb-1 text-center">Products</h1>
                    <form  onSubmit={handleSubmit}>
                        <div className="mb-4 flex justify-between  ">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter product name" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" onChange={(e)=>setName(e.target.value)} />
                            <label htmlFor="price" className="sr-only">Price</label>
                            <input type="text" name="price" id="price" placeholder="Enter product price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" onChange={(e)=>setPrice(e.target.value)} />
                            </div>
                            <div className="mb-4 flex justify-between ">
                            <label htmlFor="description" className="sr-only">Description</label>
                            <input type="text" name="description" id="description" placeholder="Enter product description" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" onChange={(e)=>setDescription(e.target.value)} />
                            <label htmlFor="category" className="sr-only">Quantity</label>
                            <input type="text" name="quantity" id="quantity" placeholder="Enter product quantity" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between"onChange={(e)=>setQuantity(e.target.value)} />
                        </div>
                        <div className="mb-4 flex justify-between ">
                            <label htmlFor="image" className="sr-only">Category</label>
                            <input type="text" name="Category" id="Category" placeholder="Enter product Category" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" onChange={(e)=>setCategory(e.target.value)}/>
                            <label htmlFor="quantity" className="sr-only">Total</label>
                            <input type="text" name="TotalPrice" id="TotalPrice" placeholder="TotalPrice" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" onChange={(e)=>setTotalPrice(e.target.value)} />
                        </div>
                        <div className="flex justify-start gap-4">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-52">Add Product</button>
                      
                        
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
                                        
                                           {data.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="border px-4 py-2">{item.name}</td>
                                                    <td className="border px-4 py-2">{item.category}</td>
                                                    <td className="border px-4 py-2">{item.description}</td>
                                                    <td className="border px-4 py-2">{item.price}</td>
                                                    <td className="border px-4 py-2">{item.quantity}</td>
                                                    <td className="border px-4 py-2">{item.totalprice}</td>
                                                    </tr>
                                            ))}
                                    
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