import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { Menu, X } from "lucide-react"; // hamburger + close icons


const NavBar = ({setShowLogin}) => {

  const  [menu, setmenu] = useState("menu");
  const [mobileOpen, setMobileOpen] = useState(false);
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
    setToken('');
    navigate("/")
  }

  return (
    <div class="flex items-center justify-between px-4 sm:px-6  py-4  md:px-10  ">

        <Link to='/'><img className="w-[150px] sm:w-[140px] xs:w-[120px] " src={assets.logo} alt="" /></Link>
        
        
        <ul className=" list-none gap-6 text-red-600 text-lg hidden lg:flex  ">
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

        <div class="flex items-center gap-4 sm:gap-6 ">
            <img className='w-[20px] sm:w-[22px] md:w-[24px]' src={assets.search_icon} alt="" />
            <div class="relative">
                <Link to="/cart"><img className='w-[20px] sm:w-[22px] md:w-[24px] cursor-pointer' src={assets.basket_icon} alt="" /></Link>
                
                <div  className={` ${getTotalCartAmount()===0?"":"absolute min-w-2.5 min-h-2.5 bg-red-500 rounded-sm -top-2 -right-2"}`}></div>
            </div>

                {!token ? (
                  <button
                    onClick={() => setShowLogin(true)}
                    className="bg-transparent text-[#49557e] border border-[tomato] 
                              px-4 py-1.5 sm:px-6 sm:py-2 
                              rounded-full cursor-pointer transition 
                              hover:bg-[#fff4f2] text-[14px] sm:text-[16px] "
                  >
                    Sign in
                  </button>
                ) : (
                  <div className="relative group">
                    <img
                      src={assets.profile_icon}
                      alt="profile"
                      className="w-[22px] sm:w-[20px] md:w-[20px]"
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
                {/* Hamburger Menu (Mobile < 1024px) */}
                <button
                  className="lg:hidden flex items-center z-50 mr-2 sm:mr-4"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
        </div>

        {/* Mobile Dropdown */}
          {mobileOpen && (
            <div className="absolute top-20 left-0 w-full bg-white shadow-md 
                  flex flex-col items-center gap-6 py-6 text-lg 
                  z-40 lg:hidden">
              <Link
                to={"/"}
                onClick={() => {
                  setmenu("home");
                  setMobileOpen(false);
                }}
                className={menu === "home" ? "text-red-500" : ""}
              >
                Home
              </Link>
              <a
                href="#menu"
                onClick={() => {
                  setmenu("menu");
                  setMobileOpen(false);
                }}
                className={menu === "menu" ? "text-red-500" : ""}
              >
                Menu
              </a>
              <a
                href="#app-download"
                onClick={() => {
                  setmenu("mobile-app");
                  setMobileOpen(false);
                }}
                className={menu === "mobile-app" ? "text-red-500" : ""}
              >
                Mobile App
              </a>
              <a
                href="#footer"
                onClick={() => {
                  setmenu("contact-us");
                  setMobileOpen(false);
                }}
                className={menu === "contact-us" ? "text-red-500" : ""}
              >
                Contact Us
              </a>
            </div>
          )}


    </div>
  )
}

export default NavBar
