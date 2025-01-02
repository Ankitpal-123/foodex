import NonVeg from "./Nonveg";
import RestComponent from "./RestComponent";
import Veg from "./Veg";

const FoodItem = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-7">
      <h1 className="font-bold text-xl">Food Items</h1>
      <Veg />
      <NonVeg />
      <RestComponent />
    </div>
  );
};

export default FoodItem;
