import { NavLink } from "react-router-dom"
import { assets } from "../../assets/assets"


const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-[100vh] border-[1.5px] border-solid border-[#a9a9a9] ">
        <div className="pt-[50px]  pl-[20%] flex flex-col gap-5 ">
          
          
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l-md cursor-pointer 
              ${isActive ? "bg-[#fff0ed] border-tomato" : "border-gray-400"}`
            }
          >
            <img src={assets.add_icon} alt="Add" />
            <p className="max-[900px]:hidden">Add Items</p>
          </NavLink>

          <NavLink 
            to="/list"
            className={({isActive}) =>
              `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l-md cursor-pointer ${isActive?"bg-[#fff0ed] border-tomato" : "border-gray-400"}`
            }>
              <img src={assets.order_icon} alt="" />
              <p className="max-[900px]:hidden" >List Items</p>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l-md cursor-pointer 
              ${isActive ? "bg-[#fff0ed] border-tomato" : "border-gray-400"}`
            }
          >
            <img src={assets.order_icon} alt="Add" />
            <p className="max-[900px]:hidden">Orders</p>
          </NavLink>

          
        </div>
    </div>
  )
}

export default Sidebar











{/* <NavLink to='/list' className=" flex items-center gap-3 border-[3px] border-solid border-[#a9a9a9] border-r-0 p-[9px] cursor-pointer rounded-t-[3px] rounded-l-xl ">
            <img src={assets.order_icon} alt="" />
            <p className="max-[900px]:hidden" >List Items</p>
          </NavLink>
          <NavLink to="/orders" className=" flex items-center gap-3 border-[3px] border-solid border-[#a9a9a9] border-r-0 p-[9px] cursor-pointer rounded-t-[3px] rounded-l-xl ">
            <img src={assets.order_icon} alt="" />
            <p className="max-[900px]:hidden" >Orders</p>
          </NavLink> */}