import React from 'react';
import "./Navigation.css"
import { Link } from 'react-router-dom';
import logo from '../assets/popify-logo.png';

export const Navigation = () => {
  return (
    <div class="container">
      <div class="logo">
        <img src={logo} alt="popify logo"/>
      </div>
      <div class="links">
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div>
          <Link to="/Signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
