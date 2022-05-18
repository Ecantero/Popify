import React from "react";
import { Sidenav } from "../Sidenav";
import { SongCard } from "../SongCard";
import "./Homepage.css";


export default function Home() {
    return(
        
        <div className="homepage">
            <Sidenav/>
            <div className="spacerHorizontal"></div>
            <div className="home">
                <div className="header">
                     <div className="userButton ">
                         <div className='userIcon'></div>
                         mirandashaekelley
                    </div>
                </div>
                <div className="heading1">Good Morning, mirandashaekelley</div>
                <div className="spacer"></div>
                <div className="heading2">Recently Played</div>
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
    )
}