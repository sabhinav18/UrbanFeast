import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 py-6 px-4 sm:px-8 lg:px-16" id="explore-menu">
      {/* Heading */}
      <h1 className="text-[#262626] font-medium text-2xl sm:text-3xl">Explore our menu</h1>

      {/* Description */}
      <p className="text-gray-500 max-w-[60%] md:max-w-full text-base sm:text-sm">
        Choose from a diverse menu featuring a delectable array of dishes.!
      </p>

      {/* Menu List */}
      <div className="flex items-center gap-6 sm:gap-8 text-center my-5 overflow-x-auto scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[7.5vw] min-w-[80px] rounded-full transition duration-200 cursor-pointer ${
                category === item.menu_name ? "border-4 border-[tomato] p-1" : ""
              }`}
            />
            <p className="mt-2 text-gray-500 text-[16px] sm:text-[15px] md:text-[14px]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-2 h-[2px] bg-gray-200 border-none" />
    </div>
  );
};

export default ExploreMenu;

