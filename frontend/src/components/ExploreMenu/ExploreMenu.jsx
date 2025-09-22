

import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-[20px] px-6 py-8'>
      <h1 className='text-3xl  text-[#262626] font-medium'>Explore our menu</h1>
      <p className="max-w-[60%]  text-[#808080]">Choose from a diverse menu featuring a delectable array of dishes.!</p>
      <div className='flex justify-between items-center gap-[30px] text-center mx-[20px] my-[0px]  '> 
        {menu_list.map((item,index)=>{
            return (
            <div className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s]' onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}  >
                <img className={category===item.menu_name?"border-[4px] border-solid border-red-500 p-[2px] rounded-full": ""} src={item.menu_image} alt="" />
                <p className='mt-[10px] text-[#747474] cursor-pointer text-base '>{item.menu_name}</p>
            </div>
            )
        })}
      </div>
      <hr className='mx-[10px] h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
