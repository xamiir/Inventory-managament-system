import { useState } from "react";

const LoginPage = ({ user, setUser }) => {
  const [userName, setUserName] = useState(null);
  const handelUser = (e) => {
    setUserName(e.target.value);
  };
  const prevent = (e) => {
    e.preventDefault();
    setUser(userName);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="py-4 px-4 mx-auto shadow-xl lg:w-1/3 bg-white rounded-md">
        <div className="bg-white   shadow-lg w-full rounded-md h-32  relative m-2">
          <form className=" relative  m-2 top-4" onSubmit={prevent}>
            <input
              type="text"
              placeholder="Enter userName"
              className="border border-black  w-full px-2 py-2 rounded-md mt-0 "
              onChange={handelUser}
            ></input>
            <button className="bg-sky-500 w-full mt-2 py-2 px-2 rounded-md font-bold text-white text-2xl">
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
