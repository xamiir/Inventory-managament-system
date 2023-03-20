

const Header = ({user ,setUser})=>{

return(
    <div className="bg-white   shadow-lg w-full rounded-md h-32  relative m-2">
    <form className=" relative  m-2 top-4">
    <p className="bg-sky-500 rounded-md  w-full  py-2  mt-0 text-white text-2xl font-bold text-center  " >Hi {user} Welcome</p>
    <button className="bg-sky-500 w-full mt-2 py-2 px-2 rounded-md font-bold text-white text-2xl t"type="submit"onSubmit={()=>setUser("")}>logOut</button>
    </form>
     </div>
)
}
export default Header;