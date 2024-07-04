import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiFoodTruck } from "react-icons/gi";
// Assuming you have CSS for the Navbar

import { auth } from './Firebase';
function Navbar() {
  const[menu,setemenu]=useState("home");
  
  return (
    <nav className="navbar">
      <div className='logo'>
       <Link style={{textDecoration:'none'}} to='/'>  <GiFoodTruck className='icons' />
        <span style={{color:'tomato'}} className='left'>Food</span>
         <span style={{color:'red'}} className='right'>Cart</span></Link>

      </div>
      <div className='Homepage'>
        <Link to='/' className='home'>Home</Link>
       <Link to='/review'>   <p>Reviews</p></Link>

        <Link to='/cart'> 
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      <div className='login-sing'>
      <Link to='/signup' >
        <button className='sign-up'>SignUp</button></Link>
      <Link to='/login' > <button>Login</button> </Link>  
     
      
     
      </div>
    </nav>
  );
}

export default Navbar;
