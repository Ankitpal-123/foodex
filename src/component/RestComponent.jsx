const RestComponent = () => {
  return (
    <>
      <div className="h-80 w-full bg-gradient-to-r from-red-500 to-orange-400 mt-10 rounded-[20px] flex justify-center items-center flex-col gap-8">
        <h1 className="text-white font-bold text-3xl">
          Find Special Offer from Your Favorite FoodEx
        </h1>
        <p className="text-white text-center w-9/12">
          Unlock amazing discounts and exclusive deals on the best food from
          your favorite restaurants at FoodEx. Whether you're craving pizza,
          sushi, or something sweet, we’ve got you covered. Don’t miss out on
          limited-time offers and special promotions designed to make your
          dining experience even more delicious and affordable!
        </p>
        <button className="bg-black text-white rounded-full px-5 py-2 font-bold">
          Book you food
        </button>
      </div>

      <div className="flex justify-between items-center mt-10 flex-col gap-2">
        <p className="text-[rgb(255,150,99)] text-sm">How its work</p>
        <p className="text-3xl font-bold">Simple and Easy</p>
        <p>Order your favorite meal in just few steps!</p>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 justify-around items-center">
        <div className="bg-white h-auto w-96 py-5 px-5 rounded-lg ">
          <p className="text-xl font-bold text-gray-600">Your Order</p>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            mollitia officiis, earum accusamus quibusdam repellat perferendis!
            Non nesciunt consequuntur minima ratione similique distinctio.
          </p>
        </div>
        <div className="bg-white h-auto w-96 py-5 px-5 rounded-lg ">
          <p className="text-xl font-bold text-gray-600">Cash On Delivery</p>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            mollitia officiis, earum accusamus quibusdam repellat perferendis!
            Non nesciunt consequuntur minima ratione similique distinctio.
          </p>
        </div>
        <div className="bg-white h-auto w-96 py-5 px-5 rounded-lg ">
          <p className="text-xl font-bold text-gray-600">Order Receive</p>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            mollitia officiis, earum accusamus quibusdam repellat perferendis!
            Non nesciunt consequuntur minima ratione similique distinctio.
          </p>
        </div>
      </div>
    </>
  );
};

export default RestComponent;
