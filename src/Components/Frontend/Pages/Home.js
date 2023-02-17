import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Cards from '../Components/Cards'
import Cart from '../Pages/Cart';
import Footer from '../Components/Footer';

export default function Home({ addToCart, cart, setCart, addItem }) {
  const [show, setShow] = useState(true);
  return (
    <div >
      <Nav setShow={setShow} />
      {(show) ? <Cards addToCart={addToCart} /> : <Cart cart={cart} setCart={setCart} addItem={addItem} />}
      <br /><br></br>
      <hr></hr>
      <Footer />
    </div>

  )
}
