import React, {useState, useEffect} from "react";
import {Player} from '../Player';
import { Sidenav } from "../Sidenav";
import { SongCard } from "../SongCard";
import { SongList } from "../SongList";
import './AccountOverview.css';

export default function AccountOverview() {

    const [songs,setSongs] = useState([
        {
            "title": "$orries",
            "artist": "Peachy!",
            "album": " Shiloh",
            "track": "$orries",
            "year": "1",
            "img_src": "./songs_images/$orries_Cover (front)_e.jpg",
            "src": "./songs/$orries.mp3"
        },
        {
            "title": "[oops]",
            "artist": "potsu",
            "album": "[oops]",
            "track": "1",
            "year": "",
            "img_src": "./songs_images/[oops]_Cover (front)_e.jpg",
            "src": "./songs/[oops].mp3"
        },
        {
            "title": "5:32pm",
            "artist": "The Deli",
            "album": "Vibes 2",
            "track": "12",
            "year": "",
            "img_src": "./songs_images/5 32pm_Cover (front)_e.jpg",
            "src": "./songs/5 32pm.mp3"
        },
        {
            "title": "88 Keys",
            "artist": "Oatmello",
            "album": "Snapshots",
            "track": "3",
            "year": "",
            "img_src": "./songs_images/88 Keys_Cover (front)_e.jpg",
            "src": "./songs/88 Keys.mp3"
        },
        {
            "title": "Affection",
            "artist": "Jinsang",
            "album": "Life",
            "track": "15",
            "year": "",
            "img_src": "./songs_images/Affection_Cover (front)_e.jpg ",
            "src": "./songs/Affection.mp3"
        },
        {
            "title": "Again",
            "artist": "Wun Two",
            "album": "Penthouse",
            "track": "4",
            "year": "",
            "img_src": "./songs_images/Again_Cover (front)_e.jpg",
            "src": "./songs/Again.mp3"
        },
        {
            "title": "Alone and Lonely",
            "artist": "prxz",
            "album": " Shiloh Dynasty",
            "track": "Love Wounds",
            "year": "2",
            "img_src": "./songs_images/Alone and Lonely_Cover (front)_e.jpg",
            "src": "./songs/Alone and Lonely.mp3"
        },
        {
            "title": "Baby You're Worth It",
            "artist": "Kina",
            "album": "Baby You're Worth It",
            "track": "1",
            "year": "",
            "img_src": "./songs_images/Baby You're Worth It_Cover (front)_e.jpg",
            "src": "./songs/Baby You're Worth It.mp3"
        },
        {
            "title": "Backpack City",
            "artist": "Flovry",
            "album": " tender spring",
            "track": "Ages Ago",
            "year": "4",
            "img_src": "./songs_images/ ",
            "src": "./songs/Backpack City.mp3"
        },
        {
            "title": "Beauty",
            "artist": "eyeroze",
            "album": "Heartless",
            "track": "4",
            "year": "",
            "img_src": "./songs_images/Beauty_Cover (front)_e.jpg",
            "src": "./songs/Beauty.mp3"
        },
        {
            "title": "Better Than He Can",
            "artist": "Jennifer Flores",
            "album": " Shiloh Dynasty",
            "track": " LofiCentral",
            "year": "All My Love",
            "img_src": "./songs_images/Better Than He Can_Cover (front)_e.jpg",
            "src": "./songs/Better Than He Can.mp3"
        },
        {
            "title": "Break My Heart Again",
            "artist": "90degrees",
            "album": "Break My Heart Again",
            "track": "1",
            "year": "",
            "img_src": "./songs_images/Break My Heart Again_Cover (front)_e.jpg",
            "src": "./songs/Break My Heart Again.mp3"
        },
        {
            "title": "Brightness",
            "artist": "eyeroze",
            "album": "Heartless",
            "track": "15",
            "year": "",
            "img_src": "./songs_images/Brightness_Cover (front)_e.jpg",
            "src": "./songs/Brightness.mp3"
        },
        {
            "title": "Call me",
            "artist": "90sFlav",
            "album": "Collection",
            "track": "1",
            "year": "",
            "img_src": "./songs_images/Call me_Cover (front)_e.jpg",
            "src": "./songs/Call me.mp3"
        },
        {
            "title": "Can We Kiss Forever?",
            "artist": "Kina",
            "album": " Adriana Proenza",
            "track": "Can We Kiss Forever?",
            "year": "1",
            "img_src": "./songs_images/Can We Kiss Forever _Cover (front)_e.jpg",
            "src": "./songs/Can We Kiss Forever .mp3"
        },
    
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


    return (
        <div className="account-overview">
            <Sidenav/>
            <div className="spacerHorizontal"></div>
            <div className="ao">
                <div className="header">
                        <div className="userButton ">
                            Log Out
                        </div>
                    </div>
                <div className="user">
                    <div className="pfp"></div>
                    <div className="proName">
                        <div className="profile">Profile</div>
                        <div className="username">UserName</div>
                    </div>
                </div>
                <div className="userActivity">
                    <div className="topArtist">
                        <div className="topArtist"><h1>Top Artist this Month</h1></div>
                        <div className="artVis">Only Visible to You</div>
                        <div className="songCards">
                            <SongCard />
                            <SongCard />
                            <SongCard />
                            <SongCard />
                            <SongCard />
                            <SongCard />
                        </div>
                    </div>
                    <div className="topTracks">
                        <div className="topTrack"><h1>Top Tracks this Month</h1></div>
                        <div className="trackVis">Only Visible to You</div>
                        <div className="songList">
                            <div className="songItem"><h4>1.</h4> <SongList /><h5>1,000,000</h5></div>
                            <div className="songItem"><h4>2.</h4> <SongList /><h5>1,000,000</h5></div>
                            <div className="songItem"><h4>3.</h4> <SongList /><h5>1,000,000</h5></div>
                            <div className="songItem"><h4>4.</h4> <SongList /><h5>1,000,000</h5></div>
                            <div className="songItem"><h4>5.</h4> <SongList /><h5>1,000,000</h5></div>
                        </div>
                    </div>
                </div>
            </div>
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />        
            </div>
    )
}