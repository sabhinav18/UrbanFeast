import headerImg from '../../assets/header_img.png';

const Header = () => {
  return (
    <div
      className="rounded-2xl relative h-[50vw] md:h-[34vw] mx-[4vw] 
                 bg-no-repeat bg-cover bg-center 
                 max-[1050px]:mx-[3vw] max-[750px]:mx-[2vw] max-[500px]:h-[60vw]"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div
        className="absolute flex flex-col items-start gap-4 max-w-[50%] 
                   top-1/2 -translate-y-1/2 left-[6vw] animate-fadeIn
                   md:max-w-[45%]
                   max-[750px]:max-w-[65%] max-[750px]:left-[4vw]
                   max-[500px]:left-[2vw] max-[500px]:items-center max-[500px]:text-center"
      >
        <h2 className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight
                       max-[500px]:text-4xl">
          Discover the Best Food
        </h2>
        <p className="text-white text-sm md:text-base
                      max-[750px]:text-sm max-[500px]:text-xs">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients!
        </p>
        <button className="bg-white text-[#747474] font-medium text-sm md:text-base px-6 py-2 rounded-full 
                           hover:bg-gray-100 transition duration-300
                           max-[500px]:px-4 max-[500px]:py-1 max-[500px]:text-sm">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;

