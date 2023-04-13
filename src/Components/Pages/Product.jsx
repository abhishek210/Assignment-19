import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css"
const Product = ()=>{
    const [data,setdata] = useState([]);
    
   useEffect(()=>{
       fetch("https://fakestoreapi.com/products")
       .then((res)=>res.json())
       .then((data1)=>{
        console.log(data1)
        setdata(data1);
       })
   },[])

    
    return (
           <div className="container">
             <h1 style={{textAlign:"center", marginTop:"20px"}}>Product</h1>
             {
                data.length>0 ? <div className="contain">
                    {
                        data.map((data)=>{
                            return <div className="card">
                                <img src={data.image} width="200px" height="300px" />
                                <h3>{data.category}</h3>
                                <p>${data.price}</p>
                                <Link to={`/productdetail/${data.id}`} >
                                <button>Add to cart</button>
                                </Link>
                            </div>
                        })
                    }
                </div> : <h1 style={{color:"red" , textAlign:"center"}}>no data</h1>
             }
           </div>
    )
}
export default Product;