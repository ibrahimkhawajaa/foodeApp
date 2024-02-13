import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slicer.js";
import SearchSlice from "./SearchSlice";
import CategorySlice from "./CategorySlice.jsx";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    search: SearchSlice,
    category: CategorySlice,
  },
});
export default store;
