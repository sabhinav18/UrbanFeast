import React, { useState } from 'react'
import NavBar from './components/NavBar'
import {  Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Chatbot from './components/Chatbot/Chatbot'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  const location = useLocation();
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/> :<></>}
      <div class=" px-6 m-0 box-border min-h-screen   ">
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/placeorder" element={<PlaceOrder/>} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />

        </Routes>
        {location.pathname === "/" && <Chatbot/>}
       
      </div>
      <Footer />
      
    </>
    
  )
}

export default App