import { React } from 'react';
import './Sidenav.css'
import { Link } from 'react-router-dom';
import homeicon from '../assets/homeicon.png';
import playlisticon from '../assets/playlisticon.png'
import searchicon from '../assets/searchicon.png'
import settingsicon from '../assets/settingsicon.png'

export const Sidenav = (props) => {
    return (
        <div className='sidenav'>

            <div className='settings'>
                <img alt='settings icon' class='icon-sidebar' src={settingsicon} />
            </div>
            <div class='list-nav'>
            <Link to="/home"><img alt='home icon' class='icon-sidebar' src={homeicon}/></Link>
                <Link to="/home">home</Link>
            </div>
            <div class='list-nav'>
            <Link to="/search"><img alt='search icon' class='icon-sidebar' src={searchicon}/></Link>
                <Link to="/search">search</Link>
            </div>
            <div class='list-nav'>
                <Link to="/playlists"><img alt='playlist' class='icon-sidebar' src={playlisticon} /></Link>
                <Link to="/playlists">playlists</Link>
            </div>
            
            
            
        </div>
    )
}

