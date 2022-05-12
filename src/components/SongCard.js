import React from 'react';
import "./SongCard.css";
import songimg from '../assets/Evil_Morty_Cover.jpg';

export const SongCard = (props) =>{
    return(
        <div className='card'>
            <div className='songArt'>
                <img alt="Cover Art" src={songimg}></img>
            </div>
            <div className='songTitle'>Evil Morty (Cover)</div>
            <div className='songArtist'>Weegie</div>

        </div>
    )
}