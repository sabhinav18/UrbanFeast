
import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='mt-24 px-4'>
      <div className='w-full'>
        {/* Cart Items Header */}
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-sm sm:text-base font-medium'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-2 border-gray-200" />

        {/* Cart Items */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] my-[10px] items-center text-black">
                  <img className='w-12 sm:w-14' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p 
                    onClick={() => removeFromCart(item._id)} 
                    className='cursor-pointer text-red-500 font-bold'>
                    x
                  </p>
                </div>
                <hr className='h-0.25 bg-[#e2e2ee] border-none' />
              </div>
            )
          }
          return null;
        })}
      </div>

      {/* Cart Totals + Promo Section Side by Side */}
      <div className='mt-20 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[12vw]'>
        
        {/* Cart Totals */}
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>Cart Totals</h2>
          <div className="space-y-3">
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555] font-bold'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div> 
            <button 
              onClick={() => navigate('/placeorder')} 
              className='text-white bg-red-500 w-[max(15vw,200px)] my-4 py-[12px] rounded-md cursor-pointer hover:bg-red-600 transition'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>

        {/* Promo Code */}
        <div className='flex-1'>
          <p className='text-[#555] mb-3'>If you have a promo code, enter it here</p>
          <div className='flex items-center justify-between bg-gray-200 rounded-md p-2'>
            <input 
              className='bg-transparent outline-none border-none px-2 flex-1' 
              type='text' 
              placeholder='Promocode' 
            />
            <button className='bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
