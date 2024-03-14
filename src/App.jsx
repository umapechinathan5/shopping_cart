import React, { useState } from 'react';
import './App.css'
import Header from'./Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import Down from './Components/Down';





function App() {

  const[cartcount,setCartcount] = useState(0);
   const data = [{
    title:"Rose bouquet",
    id:1,
    cost:1150,
    star:4,
    image:"/Anthrium.webp",
    incart:0

   },
   {
    title:"Glittery Rose",
    id:2,
    cost:1050,
    star:5,
    image:"/Glittery.jpeg",
    incart:0
   },
   {
    title:"Mixed Flowers",
    id:3,
    cost:850,
    star:2,
    image:"/Mixed_flowers.webp",
    incart:0
   },
   {
    title:"Pastel Flowers",
    id:4,
    cost:1850,
    star:3,
    image:"/Pastel.jpg",
    incart:0
   },
   {
    title:"Red Rose",
    id:5,
    cost:2010,
    star:3,
    image:"/Red_rose.png",
    incart:0
   },
   {
    title:"Sweet Memories",
    id:6,
    cost:950,
    star:5,
    image:"/Sweet_memories.jpg",
    incart:0
   },
   {
    title:"Teddy",
    id:7,
    cost:2500,
    star:5,
    image:"/Teddy.webp",
    incart:0
   },
   {
    title:"Yellow Rose",
    id:8,
    cost:1175,
    star:4,
    image:"/Yellow_rose.jpg",
    incart:0
   }];
   
   const [cart,setCart] = useState([]);
   function addtocart(product){
   
    setCart([...cart, { ...product, quantity: 1  }]);
   
   };

   
   const removefromcart = (productId) => {
    const updatedCart = cart.map((item) => {
        if (item.id === productId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity !== 0);
    setCart(updatedCart);
   
  };

 

  return (

    <div>
       <Header cart={cart} />
       <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-xl-4 justify-content-center'>
      {data.map((product)=>{
        return <Card product={product} key={product.title} addtocart = {addtocart} removefromcart = {removefromcart} cart={cart}/>
       })}
      </div>
      </div> 
      <Down />
      </section>
    </div>
  ); 
}

export default App
