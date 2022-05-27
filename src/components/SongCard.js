import React from 'react';
import "./SongCard.css";
import { Link } from 'react-router-dom';
import songimg from '../assets/Evil_Morty_Cover.jpg';
import playicon from '../assets/play-icon.png';

export const SongCard = (props) =>{
    return(
        <div className='card'>
            <div className='songArt'>
                <img alt="Cover Art" className='song-img' src={songimg}></img>
                <img alt="Play Button" src={playicon} className='play-overlay'></img>
            </div>
            <div className='songTitle'><Link to='/Song'>Evil Morty (Cover)</Link></div>

            <div className='songArtist'><Link to='/Artist'>Weegie </Link></div>

        </div>
    )
}