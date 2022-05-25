import React from 'react';
import "./SongCard.css";
import { Link } from 'react-router-dom';
import songimg from '../assets/Evil_Morty_Cover.jpg';

export const SongCard = (props) =>{
    return(
        <div className='card'>
            <div className='songArt'>
                <img alt="Cover Art" src={songimg}></img>
            </div>
            <div className='songTitle'><Link to='/Song'>Evil Morty (Cover)</Link></div>

           
              <div className='songArtist'><Link to='/Artist'>Weegie </Link></div>

        </div>
    )
}