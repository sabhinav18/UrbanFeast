import React, {  useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {

    const url = "https://urbanfeast-backend.onrender.com";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"

    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add` , formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    // useEffect(() => {
    //     console.log(data);
    // },[data])


  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]  '>
        <form className=' flex flex-col gap-5' onSubmit={onSubmitHandler}>
            <div className=' flex flex-col gap-5 w-[120px] '>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className=' flex flex-col gap-5 w-[max(40%,280px)]'>
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} className='p-2.5 border-1  ' type="text" name="name" placeholder='Type here' />
            </div>
            <div className=' flex flex-col gap-5 w-[max(40%,280px)]'>
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='p-2.5 border-1  ' name='description' rows="6" placeholder='Write content here'></textarea>
            </div>
            <div className='flex gap-8'>
                <div>
                    <p className='mb-3'>Product Category</p>
                    <select onChange={onChangeHandler} className='p-2 max-w-[120px] border text-black' name='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Snadwich">Snadwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div >
                    <p className='mb-3'>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' className='p-2.5 max-w-[120px] border'/>
                </div>
                
            </div>
            <button type='submit' className='border-none max-w-32 p-2.5 bg-red-500 text-white cursor-pointer' >ADD</button>
        </form>
    </div>
  )
}

export default Add
