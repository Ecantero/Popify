import React from 'react';
import "./Navigation.css"
import { Link } from 'react-router-dom';


export const Navigation = () => {
  return (
    <div class="container">
      <div class="logo">popify</div>
      <div class="links">
        <ul>
          <Link to="/">Dogs</Link>
        </ul>
      </div>
    </div>
  )
}
