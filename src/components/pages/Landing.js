import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/popify-logo.png';
import './Landing.css';
import {Navigation} from '../Navigation.js';
import { SongCard } from '../SongCard';

export default function Landing() {
    const master_list = [
        {id: 1, image: '/Cover_$orries.jpg', title: '$orries', artist: 'Peachy!' },
        {id: 2, image: '/Cover_oops.jpg', title: '[oops]', artist: 'potsu'},
        {id: 3, image: '/Cover_532.jpg', title: '5:32pm', artist: 'The Deli'}
    ]

    return(
        
        <div className='landing-page'>
          <Navigation/>
          <div className='landing-container'>
              <div className='landing-tagline'>Spotify, but worse...</div>
              <div className='tagline'>Listen to these hit songs of the day!</div>
              <div className='display'>
              {master_list.map(({id, image, title, artist}) => (
                
                <div className='card' key={id}> 
                <div className='songArt'>
                <img alt="Cover Art" className='song-img' src={process.env.PUBLIC_URL + image}></img>
                
                </div>
                <div className='songTitle'><Link to='/Song'>{title}</Link></div>
                
                <div className='songArtist'><Link to='/Artist'>{artist}</Link></div>
                
                </div>
                 ))}
            </div>
        </div>
        </div>
    )
}