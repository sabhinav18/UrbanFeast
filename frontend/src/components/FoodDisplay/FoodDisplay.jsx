import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
// import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    
  return (
    <div className='px-6 mt-[10px]'>
        <h2 className='text-2xl  font-semibold '>Top dishes near you</h2>
        <div className='grid [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[30px] '>
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    return <FoodItem key={item._id || index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay