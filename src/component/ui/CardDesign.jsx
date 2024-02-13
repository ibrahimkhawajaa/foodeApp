import {  useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slicer.js";
const CardDesign = ({ name, price, img, desc, rating, id }) => {


 const dispatch = useDispatch()
  // const Data = (name, img, price, desc, id) => {
  //   const obj = {
  //     name,
  //     img,
  //     price,
  //     desc,
  //     id
  //   };
  //   console.log(obj);
  // };

  return (
    <div className= "container sm: font-bold w-[200px] bg-white p-5 flex flex-col rounded-lg gap-2 " key={id}>
      <img
        src={img}
        loading="laz"
        alt=""
        className="w-auto h-[130px] object-contain hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500 ">${price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex items-center justify-center">

        </span>
        <button      onClick={() => dispatch(addToCart({name, img, price, desc, id,qty: 1}))}
     className="p-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardDesign;
