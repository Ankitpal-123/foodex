import { useState } from "react";

import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa"; // Import the filled heart icon

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isHeartFilled, setIsHeartFilled] = useState(false); // Boolean for toggling the heart fill

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const toggleHeartFill = () => {
    setIsHeartFilled(!isHeartFilled); // Toggle the filled state
  };
  return (
    <div>
      {" "}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex justify-around items-center h-[80px] rounded-full pt-2 pb-2">
            <div className="text-2xl font-bold text-[rgb(255,107,91)]">
              FoodEx
            </div>
            <div className="bg-white flex border-2 justify-around gap-2 rounded-full border-[#ececec] pl-4 pr-4">
              <CiLocationOn className="flex items-center justify-center m-auto" />
              <div>
                <select
                  id="dropdown"
                  value={selectedValue}
                  onChange={handleChange}
                  className="outline-none border-none bg-transparent w-36"
                >
                  <option value="option1" className="text-ellipsis">
                    Mumbai
                  </option>
                  <option value="option2">Nallsopara</option>
                  <option value="option3">Vasai</option>
                </select>
              </div>
            </div>
            <div className="flex gap-5">
              <p className="border-[rgb(137, 131, 131)] bg-white border-2 p-1 pl-3 pr-3 rounded-full">
                Home
              </p>
              <p className="border-[rgb(137, 131, 131)] bg-white border-2 p-1 pl-3 pr-3 rounded-full">
                Explore Foods
              </p>
              <p className="border-[rgb(137, 131, 131)] bg-white border-2 p-1 pl-3 pr-3 rounded-full">
                Restaurants
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div onClick={toggleHeartFill} className="cursor-pointer">
                {isHeartFilled ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <CiHeart className="text-black" />
                )}
              </div>
              <button className="bg-[rgb(255,150,99)] rounded-full p-2 pl-4 pr-4 text-sm text-white font-bold">
                Log In
              </button>
              <button className="bg-[rgb(255,150,99)] rounded-full p-2 pl-4 pr-4 text-sm text-white font-bold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
