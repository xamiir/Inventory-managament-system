import Addpro from "./Files/Addpro";
import Customers from "./Files/Customers";
import Product from "./Files/Product";
import SalesOrder from "./Files/SalesOder";
import Cus from "./Files/Cus";
import Adduser from "./Files/Adduser";




const Dashboard = () => {
    return (
       <div className= "bg-white ">
        <div className= "bg-gray-800 "
            style={{ width: "20%", height: "100vh", float: "left" }}>
            <nav className= "bg-gray-800 ">
                <div className= "px-2 space-y-3 ">
                    <a href= "#" className= "bg-gray-900 text-white block px-3 py-2 rounded-md  font-medium text-2xl" aria-current= "page" > Dashboard </a>
                    <a href= "#" className= "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > User's </a>
                    <a href= "" className= "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Customers </a>
                    <a href= "#" className= "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Products </a>
                    <a href= "#" className= "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Sales Order </a>
                    <a href= "#" className= "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" > Reports </a>

                    </div>
                </nav>
                 </div>
           <Adduser/>
            </div>

    )
}
export default Dashboard;