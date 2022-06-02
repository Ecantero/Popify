import React, {useState, useEffect} from "react";
import { Player} from '../Player';
import { Sidenav } from "../Sidenav";
import { SongCard } from "../SongCard";
import { SongList } from "../SongList";
import './AccountOverview.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import profileimg from '../../assets/profile-icon.png';

import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports'
Amplify.configure(awsExports);

export default function AccountOverview() {

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
            "img_src": "./songs_images/Backpack City_Cover (front)_e.jpg ",
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


    return (
        <div className="account-overview">
            <Sidenav/>
            <div className="spacerHorizontal"></div>
            <div className="ao">
                <div className="header">
                    <Authenticator>
                        {({signOut, user}) =>(
                           <div className="userButton" onClick={signOut}>
                            Log Out
                            </div>  
                        )}
                    </Authenticator>
                       
                    </div>
                <div className="user">
                    {/* <div className="pfp"> */}
                        <img alt="profile picture" src={profileimg} className="pfp"></img>
                    {/* </div> */}
                    <div className="proName">
                        <div className="profile">Profile</div>
                        <Authenticator>
                        {({ signOut, user }) => (
                           <div className="username">{user.attributes.email}</div> 
                        )}
                        </Authenticator>
                        
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