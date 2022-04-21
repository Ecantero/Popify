import React from 'react';
import "./Navigation.css"
import { Link } from 'react-router-dom';


export const Navigation = () => {
  return (
    <div class="container">
      <div class="logo">popify</div>
      <div class="links">
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
