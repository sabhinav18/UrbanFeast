import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
      
    }else{
      toast.error("Error");
    }
  }

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
    
  }


  useEffect(()=>{
    fetchAllOrders();
  },[])


  return (
    <div className="p-6">
      <h3 className='text-xl font-bold m-10 text-[#505050]'>Order Page</h3>
      <div className="">
        {
          orders.map((order,index)=>(
            <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-8 border-[1px] border-solid border-red-500 p-5 m-10 text-[14px] text-[#505050] '>
              <img src={assets.parcel_icon} alt="" />
              <div >
                <p className='font-semibold'>
                  {order.items.map((item,i)=>{
                    if(i === order.items.length-1){
                      return item.name + " X " + item.qauntity + " , "
                    }else {
                    return item.name + " X " + item.qauntity + ", "
                  }
                  })}
                </p>
                <p className='font-semibold mt-[30px] mb-1'>
                  {order.address.firstName+" "+order.address.lastName}
                </p>
                <div className='mb-3'>
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+", " + order.address.state+", "+order.address.zipCode}</p>
                </div>
                <p>{order.address.phone}</p>
              </div >
                <p>Items :{ order.items.length}</p>
                <p>${order.amount}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='border-[1px] border-[tomato] bg-[#ffe8e4] w-[max(10vw,120px)] p-2 outline-none '>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders