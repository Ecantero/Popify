import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/popify-logo.png';
import './Landing.css';
import {Navigation} from '../Navigation.js';
import { SongCard } from '../SongCard';

export default function Landing() {
    return(
        
        <div className='landing-page'>
          <Navigation/>
          <div className='landing-container'>
              <div className='landing-tagline'>Spotify, but worse...</div>
              <div className='tagline'>Listen to these hit songs of the day!</div>
              <div className='display'>
                <SongCard/>
                <SongCard/>
                <SongCard/>
            </div>
        </div>
        </div>
    )
}