import React from "react";
import {Player} from '../Player';
import {useState,useEffect} from "react";
import { Sidenav } from "../Sidenav";
import { SongCard } from "../SongCard";
import { Link } from "react-router-dom"
import "./Homepage.css";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports'
Amplify.configure(awsExports);


export default function Home() {

    const master_list = [
        {id: 1, image: '/Cover_$orries.jpg', title: '$orries', artist: 'Peachy!' },
        {id: 2, image: '/Cover_oops.jpg', title: '[oops]', artist: 'potsu'},
        {id: 3, image: '/Cover_532.jpg', title: '5:32pm', artist: 'The Deli'},
        {id: 4, image: '/Cover_88.jpg', title: '88 keys', artist: 'Oatmello'},
        {id: 5, image: '/Cover_Affection.jpg', title: 'Affection', artist: 'Jinsang' },
        {id: 6, image: '/Cover_Again.jpg', title: 'Again', artist: 'Wun Two'},
        {id: 7, image: '/Cover_Alone.jpg', title: 'Alone and Lonely', artist: 'prxz'},
        {id: 8, image: '/Cover_532.jpg', title: '5:32pm', artist: 'Oatmello'},
        {id: 9, image: '/Cover_Baby.jpg', title: "Baby You're Worth It", artist: 'Kina'},
        {id: 10, image: '/Cover_Backpack.jpg', title: 'Backpack City', artist: 'Flovry'}
    ]

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
        
        <div className="homepage">
            <Sidenav/>
            <div className="spacerHorizontal"></div>
            <div className="home">
            <Authenticator>
            {({ signOut, user }) => (
                 <div className="header">
                     <Link to="/AO/:aoId" className="userButton ">
                         <div className='userIcon'></div>
                         {user.attributes.email}
                    </Link>
                </div>  
            )}
            </Authenticator>
                
            
                <Authenticator>
                {({ signOut, user }) => (
                   <div className="heading1">Good Morning, {user.attributes.email}</div> 
                )}
                </Authenticator>
                <div className="spacer"></div>
                <div className="heading2">Recommended</div>
                <div className="mini-spacer"></div>
                <div className="playedContainer">
                {master_list.map(({id, image, title, artist}) => (
                
                <div className='card' key={id}> 
                <div className='songArt'>
                <img alt="Cover Art" className='song-img' src={process.env.PUBLIC_URL + image}></img>
                
                </div>
                <div className='songTitle'><Link to='/Song'>{title}</Link></div>
                
                <div className='songArtist'><Link to='/Artist'>{artist}</Link></div>
                
                </div>
                 ))}
                
                
                
                <div className="padding"></div>
                </div>
                
            </div>
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
            
        </div>
    )
}