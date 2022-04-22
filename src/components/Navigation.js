import React from 'react';
import "./Navigation.css"
import { Link } from 'react-router-dom';
import logo from '../assets/popify-logo.png';

export const Navigation = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="popify logo"/>
      </div>
      <div className="links">
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
