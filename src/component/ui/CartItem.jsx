import { decrementQty, incrementQty,removeFromCart } from "../../Redux/Slicer";
import { useDispatch } from "react-redux";
const CartItem = ( {  id, name, qty, price, img}) => {
  const dispatch = useDispatch()

  return (
    <div  class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={img}
        alt="product-image"
        class="w-full rounded-lg sm:w-40"
      />
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">{name}</h2>
        </div>
        <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div class="flex items-center border-gray-100">
            <span
             onClick={() =>
              qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
            }
              class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {" "}
              -{" "}
            </span>
            <span class=" px-3 py-2 border bg-white text-center text-xs outline-none">
              {qty}
            </span>
            <span
             onClick={() =>
              qty >= 1 ? dispatch(incrementQty({id })) : (qty = 0)
            }
              class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div class="flex items-center space-x-4">
            <p class="text-sm">{price}$</p>
            <svg
             onClick= { () => {
              dispatch(removeFromCart({ id }))
            }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {/* <button onClick= {()=>Details(item)}>cross</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
