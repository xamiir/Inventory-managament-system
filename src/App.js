
//import './App.css';
import { useEffect, useState } from "react";
//import LoginPage from "./Component/LoginPage";
//import Header from "./Component/Header";

function App() {
//   const [user , setUser] = useState();
//   useEffect(()=>{
//     document.title= user ?`${user}`:"please loging"
//   },[user])
//  if(!user){
// return<LoginPage user={user} setUser={setUser}/>
//  }
//   return (

//  <div className="flex items-center justify-center h-screen bg-gray-400">
//   <div className="py-4 px-4 mx-auto shadow-xl lg:w-1/3 bg-white rounded-md">
//     <Header user={user}/>
//   </div>
//   </div>







return(
  // users form
  <div className="flex justify-center items-center w-full h-screen">
    <div className="w-1/2">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-between">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Otto</td>
              <td className="border px-4 py-2">@mdo</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mark</td>
              <td className="border px-4 py-2">Otto</td>
              <td className="border px-4 py-2">@mdo</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mark</td>
              <td className="border px-4 py-2">Otto</td>
              <td className="border px-4 py-2">@mdo</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>

      
)

}

export default App;
