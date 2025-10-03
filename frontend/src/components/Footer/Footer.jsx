import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div id="footer" className="text-white flex bg-[#323232] flex-col items-center gap-5 pt-[50px] px-[8vw] py-5  mt-[100px]">
        <div className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-20 max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-9">
            <div className="flex flex-col items-start gap-5">
                <img className="w-[150px] -mt-[30px]" src={assets.logo} alt="" />
                <p className="-mt-[50px]">UrbanFeast brings your favorite meals right to your doorstep. From local delights to international flavors, we deliver fresh, delicious food fast – making every mealtime a delight!</p>
                <div className="flex gap-2.5 w-[40px]">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className="text-red-500 text-xl font-bold">COMPANY</h2>
                <ul>
                    <li className="mb-2.5 list-none cursor-pointer">Home</li>
                    <li className="mb-2.5 list-none cursor-pointer">About Us</li>
                    <li className="mb-2.5 list-none cursor-pointer">Delivery</li>
                    <li className="mb-2.5 list-none cursor-pointer">Privacy Policy</li>

                </ul>
            </div>
            <div className="flex flex-col items-start gap-5 ">
                <h2 className="text-red-500 text-xl font-bold">GET IN TOUCH</h2>
                <ul>
                    <li className="mb-2.5 list-none cursor-pointer">+91 9874561230</li>
                    <li className="mb-2.5 list-none cursor-pointer">contact@urbanFeast</li>
                    
                </ul>
            </div>
        </div>
        <hr className="w-[100%] h-[2px] my-[20px]" />
        <p>Copyright 2025 © UrbanFeast.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
