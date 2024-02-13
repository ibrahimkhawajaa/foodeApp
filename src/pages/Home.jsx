
import ButtonOption from "../component/ui/ButtonOption";
import CardDesign from "../component/ui/CardDesign";

import { useSelector } from "react-redux";
import FoodData from "../data";
const Home = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  return (
    <main className="  m-auto pt-10 ">

    <div className="p-5 text-center">
      <div className="flex gap-3 pt-4">
      <ButtonOption />
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-2 p-5">

    {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <CardDesign
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
          />
        ))}
    </div>
    </main>
  );
};

export default Home;
