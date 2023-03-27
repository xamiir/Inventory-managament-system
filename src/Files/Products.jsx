import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";


const Products = () => {
   const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [Category, setCategory] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [Product, setProduct] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEdit) {
            const newProduct = {
                id: new Date().getTime().toString(),
                name,
                price,
                description,
                quantity,
                Category,
                totalPrice,
            };
            if (name === "" || price === "" || description === "" || quantity === "" || Category === "" ) {
                alert("Please fill all the fields");
                return;
            }
            setProduct([...Product, newProduct]);
            setName("");
            setPrice("");
            setDescription("");
            setQuantity("");
            setCategory("");
            setTotalPrice("");
        } else {
            const newProduct = Product.map((item) => {
                if (item.id === id) {
                    return { ...item, name, price, description, quantity, Category, totalPrice };
                }
                return item;
            });
            setProduct(newProduct);
            setName("");
            setPrice("");
            setDescription("");
            setQuantity("");
            setCategory("");
            setTotalPrice("");
            setIsEdit(false);
            setId(0);
        }
    };
    const removeProduct = (id) => {
        if(!window.confirm("Are you sure you want to delete this Product?")){
            return;
        }
        const newProduct = Product.filter((item) => item.id !== id);
        setProduct(newProduct);
    }

    const editProduct = (id) => {
        const newProduct = Product.find((item) => item.id === id);
        const { name, price, description, quantity, Category, totalPrice } = newProduct;
        setName(name);
        setPrice(price);
        setDescription(description);
        setQuantity(quantity);
        setCategory(Category);
        setTotalPrice(totalPrice);
        setIsEdit(true);
        setId(id);
    }

    return (
        <div className="bg-gray-100 h-screen">
        <div className="flex justify-center">
            <div className="w-full m-9 bg-white mt-10 p-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-1 text-center">Products</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-4 flex justify-between  ">
                            <label htmlFor="name" className="sr-only">Product Name</label>
                            <input type="text" name="product name" id="product Name" placeholder="Enter Product Name" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={name} onChange={(e)=>setName(e.target.value)}  />
                            <label htmlFor="price" className="sr-only">Price</label>
                            <input type="number" name="price" id="price" placeholder="Enter Price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={price} onChange={(e)=>setPrice(e.target.value)} />
                            </div>
                            <div className="mb-4 flex justify-between  ">
                            <label htmlFor="description" className="sr-only">Description</label>
                            <input type="text" name="description" id="description" placeholder="Enter Description" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={description} onChange={(e)=>setDescription(e.target.value)} />
                            <label htmlFor="quantity" className="sr-only">Quantity</label>
                            <input type="number" name="quantity" id="quantity" placeholder="Enter Quantity" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                            </div>
                            <div className="mb-4 flex justify-between  ">
                            <label htmlFor="Category" className="sr-only">Category</label>
                            <input type="text" name="Category" id="Category" placeholder="Enter Category" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={Category} onChange={(e)=>setCategory(e.target.value)} />
                            <label htmlFor="totalPrice" className="sr-only">Total Price</label>
                            <input type="text" name="totalPrice" id="totalPrice" placeholder="Enter Total Price" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={quantity*price} onChange={(e)=>setTotalPrice(e.target.value)} />
                            </div>
                            <div className="mb-4 flex justify-between  ">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-medium w-[10%]">{isEdit ? "Edit" : "Add"}</button>
                            </div>
                </form>
                <div className="flex justify-center">
                    <div className="w-full">
                    <h1 className="text-3xl font-bold text-gray-600  text-center mb-6">Product List</h1>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Product Name</th>
                                    <th className="border px-4 py-2">Price</th>
                                    <th className="border px-4 py-2">Description</th>
                                    <th className="border px-4 py-2">Quantity</th>
                                    <th className="border px-4 py-2">Category</th>
                                    <th className="border px-4 py-2">Total Price</th>
                                    <th className="border px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Product.map((item) => {
                                    const { id, name, price, description, quantity, Category, totalPrice } = item;
                                    return (
                                        <tr key={id}>
                                            <td className="border px-4 py-2">{name}</td>
                                            <td className="border px-4 py-2">{price}</td>
                                            <td className="border px-4 py-2">{description}</td>
                                            <td className="border px-4 py-2">{quantity}</td>
                                            <td className="border px-4 py-2">{Category}</td>
                                            <td className="border px-4 py-2">{quantity*price}</td>
                                            <td className="border px-4 py-2 flex justify-end gap-4">
                                                <button className="bg-green-500 text-white px-4 py-2 rounded font-medium" onClick={() => editProduct(id)}><FaEdit/></button>
                                                <button className="bg-red-500 text-white px-4 py-2 rounded font-medium" onClick={() => removeProduct(id)}><FaTrash/></button>
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

                        
    );


    
};

export default Products;