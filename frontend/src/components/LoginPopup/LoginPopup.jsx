import { useState } from "react"
import { assets } from "../../assets/assets"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import axios from "axios"



const LoginPopup = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

        const [currentState, setCurrentState] = useState("Login")
        const [data,setData] = useState({
            name:"",
            email:"",
            password:""
        })

        const onChnangeHandler = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setData(data=>({...data,[name]:value}))
        }

        const onLogin = async (event) => {
            event.preventDefault()
            let newUrl = url;
            if(currentState==="Login"){
                newUrl += "/api/user/login"
            }else{
                newUrl += "/api/user/register"
            }

            const response = await axios.post(newUrl,data);

            if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token);
                setShowLogin(false)
            }else{
                alert(response.data.message)
            }
        }

    // useEffect(()=>{
    //     console.log(data);
        
    // },[data])

    return (
        <>
         <div className="absolute z-1 h-[100%] w-[100%] bg-[#00000090] grid">
            <form onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] p-[27px] rounded-[8px] text-[14px] animate-none">
                <div className="flex justify-between items-center text-black">
                    <h2
                    className="text-xl font-medium ">{currentState}</h2>
                    <img className="w-4 cursor-pointer" onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="flex flex-col gap-5">
                    {currentState==="Login"?<></>:<input name="name" onChange={onChnangeHandler} value={data.name} className="border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] outline-none" type="text" placeholder="Your Name" required />}
                   
                   <input name='email' onChange={onChnangeHandler} value={data.email} className="border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] outline-none" type="text" placeholder="Your Email" required />
                   <input name='password' onChange={onChnangeHandler} value={data.password}  className="border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] outline-none" type="password" placeholder="Password" required  />              
                </div>
                <button className="border-none p-[10px] rounded-[4px] text-white bg-red-500 text-[15px] cursor-pointer" type='submit' >{currentState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="flex items-start gap-2 -mt-[15px]">
                    <input className="mt-[5px]" type="checkbox" required />
                    <p>By Continuing, i agree to ther terms of use & privacy policy.</p>
                </div>
                {currentState==="Login"?<p>Create a new account? <span className="cursor-pointer text-red-500" onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span className="cursor-pointer text-red-500" onClick={()=>setCurrentState("Login")}>Login here</span></p>}
            </form>
         </div>
        
         
        </>
    )
}

export default LoginPopup