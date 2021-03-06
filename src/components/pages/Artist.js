import React from "react";
import { Sidenav } from '../Sidenav';
import {Player} from '../Player';
import {useState,useEffect} from "react";

import { SongCard } from "../SongCard";
import artistbanner from '../../assets/Lil-Uzi-Vert-Press.jpg';
import './Artist.css';
export default function Artist() {

    const [songs,setSongs] = useState([
        {
            "title": "$orries",
            "artist": "Peachy!",
            "album": " Shiloh",
            "track": "1",
            "year": "",
            "img_src": "./songs_images/$orries_Cover (front)_e.jpg",
            "src": "./songs/$orries.mp3"
        },
        {
            "title": "[oops]",
            "artist": "potsu",
            "album": "[oops]",
            "track": "2",
            "year": "",
            "img_src": "./songs_images/[oops]_Cover (front)_e.jpg",
            "src": "./songs/[oops].mp3"
        },
        {
            "title": "5:32pm",
            "artist": "The Deli",
            "album": "Vibes 2",
            "track": "3",
            "year": "",
            "img_src": "./songs_images/5 32pm_Cover (front)_e.jpg",
            "src": "./songs/5 32pm.mp3"
        },
        {
            "title": "88 Keys",
            "artist": "Oatmello",
            "album": "Snapshots",
            "track": "4",
            "year": "",
            "img_src": "./songs_images/88 Keys_Cover (front)_e.jpg",
            "src": "./songs/88 Keys.mp3"
        },
        {
            "title": "Affection",
            "artist": "Jinsang",
            "album": "Life",
            "track": "5",
            "year": "",
            "img_src": "./songs_images/Affection_Cover (front)_e.jpg ",
            "src": "./songs/Affection.mp3"
        },
        {
            "title": "Again",
            "artist": "Wun Two",
            "album": "Penthouse",
            "track": "6",
            "year": "",
            "img_src": "./songs_images/Again_Cover (front)_e.jpg",
            "src": "./songs/Again.mp3"
        },
        {
            "title": "Alone and Lonely",
            "artist": "prxz",
            "album": " Shiloh Dynasty",
            "track": "7",
            "year": "",
            "img_src": "./songs_images/Alone and Lonely_Cover (front)_e.jpg",
            "src": "./songs/Alone and Lonely.mp3"
        },
        {
            "title": "Baby You're Worth It",
            "artist": "Kina",
            "album": "Baby You're Worth It",
            "track": "8",
            "year": "",
            "img_src": "./songs_images/Baby You're Worth It_Cover (front)_e.jpg",
            "src": "./songs/Baby You're Worth It.mp3"
        },
        {
            "title": "Backpack City",
            "artist": "Flovry",
            "album": " tender spring",
            "track": "9",
            "year": "",
            "img_src": "./songs_images/ ",
            "src": "./songs/Backpack City.mp3"
        },
        {
            "title": "Beauty",
            "artist": "eyeroze",
            "album": "Heartless",
            "track": "10",
            "year": "",
            "img_src": "./songs_images/Beauty_Cover (front)_e.jpg",
            "src": "./songs/Beauty.mp3"
        }
    
    ]);
    
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    
    useEffect(()=>{
      setNextSongIndex(()=>{
        if(currentSongIndex + 1 >songs.length - 1 ){
          return 0;
        } else{
          return currentSongIndex + 1;
        }
      });
    },[currentSongIndex])

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
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
        </div>
    )
}