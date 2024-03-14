import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa";


const Card = ({product,addtocart,removefromcart,cart})=>{
const stars = product.star
  return(
    <div className="card col mb-5">
    <img className="card-img-top" src={product.image} alt="Card image cap"></img>
    <div className="card-body">
       <h4>{product.title}</h4>
       <div></div>
      <h6>Rs.{product.cost}</h6>
    </div>
    {cart.find(item => item.id === product.id)  ? <button className="btn btn-danger" onClick={()=>{removefromcart(product.id)}}>Remove from Cart</button> : <button className="btn btn-light" onClick={()=>{addtocart(product)}}>Add to Cart</button>}
    
    
  </div>
  )
}

export default Card 
