import Navbar from "./component/Navbar";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
