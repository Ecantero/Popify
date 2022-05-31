import React from 'react';
import "./SongList.css";
import { Link } from 'react-router-dom';
import songimg from '../assets/Evil_Morty_Cover.jpg';

export const SongList = (props) =>{
    return(
        <div className='list'>
            <div className='art'>
                <img className='imageArt' alt="Cover Art" src={songimg}></img>
            </div>
            <div className='title'><Link to='/Song'>Evil Morty (Cover):</Link></div>

           
            <div className='artist'><Link to='/Artist'>Weegie </Link></div>

        </div>
    )
}