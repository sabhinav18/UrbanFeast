import React from 'react'
import headerImg from '../../assets/header_img.png'

const Header = () => {
  return (
    <div className="rounded-2xl relative h-[50vw] md:h-[34vw] mx-[30px] bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(${headerImg})`}}>
        <div className="absolute top-1/2 -translate-y-1/2 left-[6vw] flex flex-col items-start gap-4 max-w-[50%] animate-fadeIn">
             <h2 className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight">
              Discover the Best Food
            </h2>
            <p className="text-white text-sm md:text-base">
                Choose from a diverse menu featuring a delectable array of dishes of crafted with the finest ingrident !
            </p>
            <button className="bg-white text-[#747474] font-medium text-sm md:text-base px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">View Menu</button>
        </div>

    </div>
  )
}

export default Header