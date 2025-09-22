import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";



const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () =>  {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        console.log("Orders:", response.data.data);
        setData(response.data.data);
        // console.log(response.data.data);
        
    }

    useEffect(() => {
        if(token){
            fetchOrders();
        }
    },[token])

    return (
        <div className="my-[50px] ml-[50px] ">
            <h2 className="text-2xl font-semibold">My Orders</h2>
            <div className="flex  flex-col gap-5 mt-8">
                {
                    data.map((order,index)=>{
                        return (
                            <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] px-5 py-2.5 text-[#454545] border border-[tomato] max-[900px]:grid-cols-[1fr_2fr_1fr] max-[900px]:gap-y-[5px] max-[900px]:text-[12px]">
                                <img src={assets.parcel_icon} alt="" className="w-[50px]" />
                                <p>{order.items.map((item,index)=>{
                                    if(index === order.items.length - 1){
                                        return item.name+" X "+item.qauntity
                                    }else{
                                        return item.name+" X "+item.qauntity+" ,"
                                    }
                                })}</p>
                                <p>${order.amount}.00</p>
                                <p>Items: {order.items.length}</p>
                                <p><span className="text-[tomato]">&#x25cf;</span> <b className="font-medium text-[#454545]">{order.status}</b></p>
                                <button onClick={fetchOrders} className="border-none py-3 rounded bg-[#ffe1e1] cursor-pointer text-[#454545] max-[900px]:text-[10px]">Track Order</button>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default MyOrders