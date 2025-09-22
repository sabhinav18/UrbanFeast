import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = () => {

  const url = "http://localhost:4000"
  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if(response.data.success) {
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }

    const removeFood=async(foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }


  useEffect(()=>{
    fetchList();
  },[])


  return (
    <div className="p-4 w-[80%]">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">All Foold List</p>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <div className="grid grid-cols-[5fr_13fr_14fr_10fr_1fr] items-center gap-2 bg-gray-100 px-4 py-3 text-sm font-semibold max-[600px]:hidden">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {
            list.map((item,index)=>{
              return (
                <div key={index} className="grid grid-cols-[5fr_13fr_14fr_10fr_1fr] items-center gap-2 px-4 py-3 border-t border-gray-300 text-sm max-[600px]:grid-cols-[1fr_3fr_1fr]">
                  <img className="w-12 h-12 object-cover rounded" src={`${url}/images/` + item.image} alt="{item.name}" />
                  <p className="truncate">{item.name}</p>
                  <p className="truncate">{item.category}</p>
                  <p className="font-medium">{item.price}</p>
                  <p onClick={()=>removeFood(item._id)} className="text-red-500 font-bold cursor-pointer hover:text-red-700">X</p>
                </div>
              )
            })
          }
        </div>
      </div>  
    </div>
  )
}

export default List

