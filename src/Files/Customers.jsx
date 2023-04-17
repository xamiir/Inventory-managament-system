import { useState,useEffect } from "react";

import { FaEdit,FaTrash } from 'react-icons/fa';
import Style from './AddCustomer.model.css'




const Customers =()=>{
    const [CustomerName, setCustomerName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Customer, setCustomer] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEdit) {
            const newCustomer = {
                id: new Date().getTime().toString(),
                CustomerName,
                PhoneNumber,
                Address,
                Email,
            };
            if (CustomerName === "" || PhoneNumber === "" || Address === "" || Email === "") {
                alert("Please fill all the fields");
                return;
            }
            setCustomer([...Customer, newCustomer]);
            setCustomerName("");
            setPhoneNumber("");
            setAddress("");
            setEmail("");
        } else {
            const newCustomer = Customer.map((item) => {
                if (item.id === id) {
                    return { ...item, CustomerName, PhoneNumber, Address, Email };
                }
                return item;
            });
            setCustomer(newCustomer);
            setCustomerName("");
            setPhoneNumber("");
            setAddress("");
            setEmail("");
            setIsEdit(false);
            setId(0);
        }
    };
    const removeCustomer = (id) => {
        if(!window.confirm("Are you sure you want to delete this Customer?")){
            return;
        }
        const newCustomer = Customer.filter((item) => item.id !== id);
        setCustomer(newCustomer);
    };

    const editCustomer = (id) => {
        const newCustomer = Customer.find((item) => item.id === id);
        const { CustomerName, PhoneNumber, Address, Email } = newCustomer;
        setCustomerName(CustomerName);
        setPhoneNumber(PhoneNumber);
        setAddress(Address);
        setEmail(Email);
        setIsEdit(true);
        setId(id);
    };
   
    return (
        <div className={Style.div1}>
            <div className="flex justify-center">
                <div className="w-full m-9 bg-white mt-10 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mb-1 text-center">Customer</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-4 flex justify-between  ">
                            <label htmlFor="name" className="sr-only">Customer Name</label>
                            <input type="text" name="CustomerName" id="CustomerName" placeholder="Enter Customer Name" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={CustomerName} onChange={(e) => setCustomerName(e.target.value)} />
                            <label htmlFor="price" className="sr-only">Phone Number</label>
                            <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Enter Phone Number" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="mb-4 flex justify-between ">
                            <label htmlFor="description" className="sr-only">Address</label>
                            <input type="text" name="Address" id="Address" placeholder="Enter Address" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={Address} onChange={(e) => setAddress(e.target.value)} />
                            <label htmlFor="description" className="sr-only">Email</label>
                            <input type="text" name="Email" id="Email" placeholder="Enter Email" className="bg-white border-2 w-[40%] p-2 rounded-lg flex justify-between" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4 flex justify-between ">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium w-[10%]">{isEdit ? "Edit" : "Add"}</button>
                        </div>
                    </form>
                    <div className="mb-4 mt-0 flex justify-center">
                        <div className="w-full m-2 bg-white mt-10 p-6 rounded-lg">
                            <h1 className="text-3xl font-bold mb-1 text-center">Customer List</h1>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Customer Name</th>
                                        <th className="px-4 py-2">Phone Number</th>
                                        <th className="px-4 py-2">Address</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Customer.map((item) => {
                                        const { id, CustomerName, PhoneNumber, Address, Email } = item;
                                        return (
                                            <tr key={id}>
                                                <td className="border px-4 py-2">{CustomerName}</td>
                                                <td className="border px-4 py-2">{PhoneNumber}</td>
                                                <td className="border px-4 py-2">{Address}</td>
                                                <td className="border px-4 py-2">{Email}</td>
                                                <td className="border px-4 py-2 flex justify-end gap-4">
                                                    <button className="bg-green-500 text-white px-4 py-2 rounded font-medium" onClick={() => editCustomer(id)}>
                                                        <FaEdit />
                                                    </button>
                                                    <button className="bg-red-500 text-white px-4 py-2 rounded font-medium" onClick={() => removeCustomer(id)}>
                                                        <FaTrash />
                                                      {}
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
    );
};

export default Customers;