import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
const Productdetail = () => {
    const {id} = useParams();
    const [showbutton, setshowbutton] = useState(false)
    const [product, setproduct] = useState({
        id:0,
        category:"",
        img:"",
        price:0
    })
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data1)=>{
         console.log(data1)
         setproduct(data1);
        })
    },[])
    const remove = ()=>{
        setproduct({})
        setshowbutton(true)
    }
  return (
    <div style={{textAlign:"center" , marginTop:"20px"}}>
        <h3>{product.category}</h3>
        <img src={product.image}  width="200px" />
        <p>{product.price}</p>
        <h3>{product.title}</h3>
        <button onClick={remove}>{showbutton ? "" : "Remove from cart"}</button>
    </div>
  )
}

export default Productdetail