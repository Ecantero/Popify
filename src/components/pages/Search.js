import React from "react";
import { Sidenav } from "../Sidenav";
import { SongCard } from "../SongCard";
import searchicon from '../../assets/searchicon.png'
import "./Search.css"


export default function Search() {
    return(
        <div className="search">
            <div className="homepage">
            <Sidenav/>
            <div className="spacerHorizontal"></div>
            <div className="home">
                <div className="header">
                   <form className="searchBar">
                        <input type="text" name="search" placeholder="Search.."/>
                    </form>
                     <div className="userButton">
                         <div className='userIcon'></div>
                         username
                    </div>
                </div>
                <div className="heading1">Recent Searches</div>
                <div className="spacer"></div>
                <div className="heading2"></div>
                <div className="mini-spacer"></div>
                <div className="playedContainer">
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    <SongCard/>
                    
                </div>
                
            </div>
            
            
        </div>
        </div>
    )
}