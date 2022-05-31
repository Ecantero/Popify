import React from 'react';
import "./Navigation.css"
import { Link } from 'react-router-dom';
import logo from '../assets/popify-logo.png';

export const Navigation = () => {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="popify logo" className='main-logo'/>
        </Link>
      </div>
      <div className="links">
        <div>
          <Link to="/Login">Login/Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
