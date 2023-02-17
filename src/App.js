import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Frontend/Pages/Home";
import AboutUs from "./Components/Frontend/Pages/AboutUs";
import Cart from "./Components/Frontend/Pages/Cart";
import SignIn from "./Components/Frontend/Pages/SignIn";



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const found = cart.some(product => product.id === item.id);
    if (found === true) {
      cart.map((product) => {
        if (product.id === item.id) {
          product.quantity = product.quantity + 1;
          alert("product present at quantity" + product.quantity)
        }
        return (item.id);
      })
    }
    else {
      let newProduct = {
        id: cart.length + 1,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      }
      cart.push(newProduct);
      alert("new item added");
      console.log(cart);
    }
  }


  return (
    <Routes>
      {/* <Route path="/" element={<Home addToCart={addToCart} cart={cart}  count={count} setCount={setCount} setCart={setCart}/>}></Route> */}
      <Route path="/" element={<Home addToCart={addToCart} cart={cart} setCart={setCart} />}></Route>
      <Route path="/Aboutus" element={<AboutUs />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/Signin" element={<SignIn />}></Route>
    </Routes>

  );
}

export default App;
