import React from "react";
import { Sidenav } from "../Sidenav";
import "./Playlists.css"
import { SongCard } from "../SongCard";


export default function Playlists() {
  return (
        <div className="playlists">
             <div className="homepage">
            <Sidenav/>
            <div className="spacerHorizontal"></div>
            <div className="home">
                <div className="header">
                     <div className="userButton ">
                         <div className='userIcon'></div>
                         username
                    </div>
                </div>
                <div className="heading1">Playlists</div>
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
