import {Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home";
import AddToCard from "./Components/Pages/AddToCard";
import Product from "./Components/Pages/Product";
import Navbar from "./Components/Navbar";
import Productdetail from "./Components/Pages/Productdetail";

function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<AddToCard />} />
      <Route path="/productdetail/:id" element={<Productdetail />} />
     </Routes>
    </>
  );
}

export default App;
