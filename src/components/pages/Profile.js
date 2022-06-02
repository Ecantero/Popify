import React from "react";
import {Player} from '../Player';
import {useState,useEffect} from "react";

export default function Profile() {

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
        <div className="profile">
            <div className="user">
                <h1>Picture</h1>
                <h4>Profile</h4>
                <h2>UserName</h2>
            </div>
            <div className="userActivity">
                <div className="topArtist">
                    <h3>Top Artist this Month</h3>
                    <h6>Only Visible to You</h6>
                    <h1>Song+Picture</h1>
                </div>
                <div className="topTracks">
                    <h3>Top Tracks this Month</h3>
                    <h6>Only Visible to You</h6>
                    <h1>Song List</h1>
                </div>
            </div>
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
        </div>
    )
}