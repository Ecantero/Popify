import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/popify-logo.png';
import './Landing.css';
import {Navigation} from '../Navigation.js';

export default function Landing() {
    return(
        
        <div className='landingPage-background'>
          <Navigation/>
            <h3>Spotify, but worse...</h3>
            <h1>Listen to these hit songs of the day!</h1>
            <div className='songBox'>
                <h4>Song Go Here</h4>
            </div>
        </div>
    )
}