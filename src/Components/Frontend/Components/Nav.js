import React from 'react'
import '../../Styles/nav.css'


export default function Nav({setShow}) {
  const openCart=(value)=>{
    setShow(value); 
  }
  return (
  <div className='myNavBar'>
    <h1 className='websiteHeader' onClick={()=>{openCart(true)}}>MCUSAIN</h1>


<nav className='myNav'>
  <ul>
    <li className='navItem' onClick={()=>{openCart(true)}}><a href="/">Home</a></li>
    <li className='navItem' ><a href="Signin">SignUp</a></li>
    <li className='navItem' ><a href="Aboutus">About Us</a></li>
    <li className='navItem' onClick={()=>{openCart(false) }} > Cart</li>

  </ul>
</nav>
</div>
  )
}
