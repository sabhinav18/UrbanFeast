import React, { useContext  } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    // const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart, removeFromCart} = useContext(StoreContext);
     
  return (
    <div className='w-[100%] m-auto rounded-[16px] shadow-[0_0_10px_#00000015] transition-all duration-300 '>
        <div className='relative'>
            <img className='w-[100%] rounded-t-2xl' src={image} alt="" />
            {!cartItems?.[id]
                ?<img className="w-[35px] absolute  bottom-[15px] right-[15px] cursor-pointer rounded-full"  onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-2 p-1.5 rounded-full bg-white'>
                    <img className='w-[30px] ' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            }
        </div>
        <div className='p-[20px]'>
            <div className='flex justify-between items-center mb-[10px]'>
                <p className='text-xl font-medium'>{name}</p>
                <img className='w-[70px]' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-[#676767] text-[14px]'>{description}</p>
            <p className='text-red-500 text-[22px] font-medium my-2'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem