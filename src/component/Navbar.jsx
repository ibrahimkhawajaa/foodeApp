import { ShoppingBag } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/SearchSlice.jsx";
import { Link } from "react-router-dom";
export default function Navbar() {
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-around p-5">
      <div>
        <h3 className="text-[gray] text-sm">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1>Welcome, Food app</h1>
      </div>
      <div className="flex">
        <input
          type="text"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          name=""
          id=""
          className="text-[10px] border-[gray] border-[1px] rounded-[12px] py-[6px] px-2 outline-none"
          placeholder="search..."
        />
            <Link to="/Cart" className="relative">
        <ShoppingBag className=" left-4 pointer cart" />
        <p
          className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full 
top-[20%] left-[70%] text-[12px] px-1"
        >
          {items.length}
        </p>
      </Link>
      </div>
  
    </div>
  );
}
