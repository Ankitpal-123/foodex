import Slider from "react-slick";
import { FoodData } from "../FoodData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VegCarousel = () => {
  // Custom Arrow Component
  const CustomArrow = ({ className, style, onClick, direction }) => (
    <button
      onClick={onClick}
      className={`absolute z-10 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-[rgb(255,107,91)] font-bold bg-white ${
        direction === "left" ? "left-0" : "right-0"
      }`}
      style={{ ...style }}
    >
      {direction === "left" ? "❮" : "❯"}
    </button>
  );

  const settings = {
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1, // Slides scrolled per click
    arrows: true, // Enable arrows
    prevArrow: <CustomArrow direction="left" />, // Left Arrow
    nextArrow: <CustomArrow direction="right" />, // Right Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <p className="text-lg font-bold mt-5">Veg Dishes</p>
      <Slider {...settings}>
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start p-2 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover h-40 w-full rounded-lg"
            />
            <div className="flex items-center justify-between mt-2 w-full">
              <p
                className={`text-lg font-semibold ${
                  item.available === "no" ? "text-gray-500" : "text-black"
                }`}
              >
                {item.name}
              </p>
              <p className="font-semibold">
                Price: <span className="text-green-500">₹{item.price}</span>
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default VegCarousel;
