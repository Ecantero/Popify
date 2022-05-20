import React from "react";
import { Sidenav } from '../Sidenav';
import { SongCard } from "../SongCard";
import artistbanner from '../../assets/Lil-Uzi-Vert-Press.jpg';
import './Artist.css';
export default function Artist() {
    return(
        <div>
            <div className="homepage">
                <Sidenav/>
            {/* <div className="spacerHorizontal"></div> */}
                <div className="home">
                    {/* 
                     */}
                    <div className="artistBanner">
                        <div className="header">
                        <div className="userButton ">
                            <div className='userIcon'></div>
                            username
                        </div>
                        </div>
                        <div className="heading2">Verified Artist</div>
                        <div className="heading1">Lil Uzi Vert</div>
                        <div className="heading2">23,675,764 monthly listeners</div>
                    </div>
                    {/* 
                    <div className="spacer"></div>
                    
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
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}