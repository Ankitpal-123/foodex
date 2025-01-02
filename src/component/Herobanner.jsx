import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import bannerimg from "../assets/banner-img.png";

const Herobanner = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-7 flex justify-around align-center">
      <div className="">
        <h1 className="font-bold text-4xl w-[65%]">
          Hungry? Deliver Happiness to Your
          <span className="text-[rgb(255,107,91)]"> Doorstep!</span>
        </h1>
        <p className="text-xl mt-5 w-[70%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
          iusto! Reprehenderit repudiandae veritatis dolore impedit ratione fuga
          esse ipsam magnam exercitationem. Itaque, ad.
        </p>
        <div className="flex bg-white w-[30%] rounded-full mt-10 items-center h-10 border border-[rgb(255,107,91)]">
          <input
            type="text"
            className="bg-transparent text-sm ml-5 text-ellipsis outline-none placeholder:text-[12px] placeholder:font-semibold placeholder:text-black"
            onChange={handleChange}
            value={search}
            placeholder="Search Foods"
          />
          <CiSearch className="text-xl text-[rgb(255,107,91)] font-bold ml-5 cursor-pointer w-6 h-6" />
        </div>

        <div className="flex gap-5 mt-5">
          <p className="border-[rgb(255,107,91)] text-[rgb(255,107,91)] font-bold cursor-pointer bg-white border-2 p-1 w-20 rounded-full flex items-center justify-center hover:bg-[rgb(255,107,91)] hover:border-none hover:text-white">
            VEG
          </p>
          <p className="border-[rgb(255,107,91)] text-[rgb(255,107,91)] font-bold cursor-pointer bg-white border-2 p-1 w-28 rounded-full flex items-center justify-center hover:bg-[rgb(255,107,91)] hover:border-none hover:text-white">
            NON-VEG
          </p>
          <p className="border-[rgb(255,107,91)] text-[rgb(255,107,91)] font-bold cursor-pointer bg-white border-2 p-1 w-28 rounded-full flex items-center justify-center hover:bg-[rgb(255,107,91)] hover:border-none hover:text-white">
            Chinese
          </p>
        </div>
      </div>
      <div className="mr-20">
        <img src={bannerimg} alt="Home food" />
      </div>
    </div>
  );
};

export default Herobanner;
