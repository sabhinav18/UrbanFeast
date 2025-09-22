import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const NavBar = ({setShowLogin}) => {

  const  [menu, setmenu] = useState("menu");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
    setToken('');
    navigate("/")
  }

  return (
    <div class="flex items-center justify-between px-6   ">

        <Link to='/'><img className="w-[150px] max1050:w-[140px] max900:w-[120px] " src={assets.logo} alt="" /></Link>
        
        
        <ul className="flex list-none gap-6 text-red-600 text-lg max1050:gap-[20px] max1050:text-[17px] max900:gap-[15px] max900:text-[16px] max750:hidden">
          {/* Home */}
          <Link to="/">
            <li
              onClick={() => setmenu("Home")}
              className={`cursor-pointer px-4 py-2 transition ${
                menu === "Home" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Home
            </li>
          </Link>

          {/* Menu (scrolls to section) */}
          <a href="#menu">
            <li
              onClick={() => setmenu("Menu")}
              className={`cursor-pointer px-4 py-2 transition ${
                menu === "Menu" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Menu
            </li>
          </a>

          {/* Mobile App (scrolls to section) */}
          <a href="#app-download">
            <li
              onClick={() => setmenu("Mobile App")}
              className={`cursor-pointer px-4 py-2 transition ${
                menu === "Mobile App" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Mobile App
            </li>
          </a>

          {/* Contact Us (footer) */}
          <a href="#footer">
            <li
              onClick={() => setmenu("Contact Us")}
              className={`cursor-pointer px-4 py-2 transition ${
                menu === "Contact Us" ? "border-b-2 border-red-500" : ""
              }`}
            >
              Contact Us
            </li>
          </a>
        </ul>

        <div class="flex items-center gap-6 max1050:gap[30px] max900:gap-[20px]">
            <img className='w-[24px] max1050:w-[22px] max900:w-[20px]' src={assets.search_icon} alt="" />
            <div class="relative">
                <Link to="/cart"><img className='w-[24px] max1050:w-[22px] max900:w-[20px] cursor-pointer' src={assets.basket_icon} alt="" /></Link>
                
                <div  className={` ${getTotalCartAmount()===0?"":"absolute min-w-2.5 min-h-2.5 bg-red-500 rounded-sm -top-2 -right-2"}`}></div>
            </div>

                {!token ? (
                  <button
                    onClick={() => setShowLogin(true)}
                    className="bg-transparent text-[#49557e] border border-[tomato] px-7 py-2 rounded-full cursor-pointer transition hover:bg-[#fff4f2] text-[16px] max-[1050px]:px-6 max-[900px]:px-5 max-[900px]:py-[7px] max-[900px]:text-[15px]"
                  >
                    Sign in
                  </button>
                ) : (
                  <div className="relative group">
                    <img
                      src={assets.profile_icon}
                      alt="profile"
                      className="max-[1050px]:w-[22px] max-[900px]:w-[20px]"
                    />
                    {/* Dropdown */}
                    <ul
                      className="absolute hidden right-0 z-[1] 
                                group-hover:flex group-hover:flex-col 
                                group-hover:gap-[10px] 
                                group-hover:bg-[#fff2ef] 
                                group-hover:p-[12px_25px] 
                                group-hover:rounded 
                                group-hover:border group-hover:border-[tomato] 
                                group-hover:outline group-hover:outline-2 group-hover:outline-white 
                                list-none"
                    >
                      <li
                        onClick={() => navigate("/myorders")}
                        className="flex items-center gap-2 cursor-pointer hover:text-[tomato]"
                      >
                        <img src={assets.bag_icon} alt="orders" className="w-5" />
                        <p>Orders</p>
                      </li>
                      <hr />
                      <li
                        onClick={logout}
                        className="flex items-center gap-2 cursor-pointer hover:text-[tomato]"
                      >
                        <img src={assets.logout_icon} alt="logout" className="w-5" />
                        <p>Logout</p>
                      </li>
                    </ul>
                  </div>
                )}
        </div>
    </div>
  )
}

export default NavBar


