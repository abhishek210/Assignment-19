import { Link } from "react-router-dom"
import "./navbar.css"
// import Home from "./Pages/Home"
const Navbar  = ()=>{
    return <>
         <div className="nav">
            <Link to="/" ><h1>Home</h1></Link>
           <Link to="/product" ><h1>Product</h1></Link>
           <Link to="/cart"> <h1>AddToCart</h1></Link>
         </div>
    </>
}
export default Navbar;