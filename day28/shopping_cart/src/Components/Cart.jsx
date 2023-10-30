// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state } = useCart();
  const { cartItems, totalQuantity, totalAmount } = state;

  return (
    <div>
      {cartItems.map((item) => 
        <div key={item.id}>
          <p>Item: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button >+</button>
          <button >-</button>
        </div>
      )}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: {totalAmount}</p>
    </div>
  );
};

export default Cart;



// import { useEffect, useState } from "react";

// function Cart () {
//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then((data)=>data.json())
//     .then((data)=>{console.log(data)});
    
//     },[])
    
//   return (
//     <>
   
//     </>
//   )
// }

//   export default Cart;