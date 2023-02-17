import React from 'react'
import Nav from '../Components/Nav'
import '../../Styles/signup.css'
import Footer from '../Components/Footer'
import Pictures from '../Components/Pictures'
export default function SignIn() {

  const img1="https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbGxhZ2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";
  
  return (
    <div>
      <Nav />
      <div className='container row signupBox'>
        <h2 className='signUpHeading'>Join Us Today!</h2>
        <div className='col-md-6 col-sm-12'>

          <label>First Name</label><br />
          <input type='text' className='inputBox' /><br /><br />
          <label>Last Name</label><br />
          <input type='text' className='inputBox' /><br /><br />
          <label>Email</label><br />
          <input type='email' className='inputBox' /><br /><br />
          <label>Password</label><br />
          <input type='text' className='inputBox' /><br /><br />
          <button className="btn btn-dark mybtn">Sign in</button><br /><br />

        </div>
        <div className='col-md-6 col-sm-12'>
          <img className='signUpImg' src='https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' alt="myPicture" />
        </div>

        <p className='joinUsText'>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion .Given the rise in mass production of commodities and clothing at lower prices and global reach, sustainability has become an urgent issue among politicians, brands, and consumers.
        </p>


      </div>
      <Pictures img={img1}/>
      <Footer />
    </div>
  )
}
