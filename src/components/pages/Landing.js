import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/popify-logo.png';
import './Landing.css';

export default function Landing() {
    return(
        
        <div className='landingPage-background'>
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
            <h3>Spotify, but worse...</h3>
            <h1>Listen to these hit songs of the day!</h1>
            <div className='songBox'>
                <h4>Song Go Here</h4>
            </div>
        </div>
    )
}