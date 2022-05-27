import React from "react";
import { Player } from "../Player";
import { useState, useEffect } from "react";
import { Sidenav } from "../Sidenav";
import { SongCard } from "../SongCard";
import "./Homepage.css";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./auth";
import { useParams } from "react-router-dom";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
  clientId: "ed8c5f5cbf984d1791368e0cd7bf97a5",
});

export default function Home() {

  const [songs, setSongs] = useState([
    {
      title: "$orries",
      artist: "Peachy!",
      album: " Shiloh",
      track: "$orries",
      year: "1",
      img_src: "./songs_images/$orries_Cover (front)_e.jpg",
      src: "./songs/$orries.mp3",
    },
    {
      title: "[oops]",
      artist: "potsu",
      album: "[oops]",
      track: "1",
      year: "",
      img_src: "./songs_images/[oops]_Cover (front)_e.jpg",
      src: "./songs/[oops].mp3",
    },
    {
      title: "5:32pm",
      artist: "The Deli",
      album: "Vibes 2",
      track: "12",
      year: "",
      img_src: "./songs_images/5 32pm_Cover (front)_e.jpg",
      src: "./songs/5 32pm.mp3",
    },
    {
      title: "88 Keys",
      artist: "Oatmello",
      album: "Snapshots",
      track: "3",
      year: "",
      img_src: "./songs_images/88 Keys_Cover (front)_e.jpg",
      src: "./songs/88 Keys.mp3",
    },
    {
      title: "Affection",
      artist: "Jinsang",
      album: "Life",
      track: "15",
      year: "",
      img_src: "./songs_images/Affection_Cover (front)_e.jpg ",
      src: "./songs/Affection.mp3",
    },
    {
      title: "Again",
      artist: "Wun Two",
      album: "Penthouse",
      track: "4",
      year: "",
      img_src: "./songs_images/Again_Cover (front)_e.jpg",
      src: "./songs/Again.mp3",
    },
    {
      title: "Alone and Lonely",
      artist: "prxz",
      album: " Shiloh Dynasty",
      track: "Love Wounds",
      year: "2",
      img_src: "./songs_images/Alone and Lonely_Cover (front)_e.jpg",
      src: "./songs/Alone and Lonely.mp3",
    },
    {
      title: "Baby You're Worth It",
      artist: "Kina",
      album: "Baby You're Worth It",
      track: "1",
      year: "",
      img_src: "./songs_images/Baby You're Worth It_Cover (front)_e.jpg",
      src: "./songs/Baby You're Worth It.mp3",
    },
    {
      title: "Backpack City",
      artist: "Flovry",
      album: " tender spring",
      track: "Ages Ago",
      year: "4",
      img_src: "./songs_images/ ",
      src: "./songs/Backpack City.mp3",
    },
    {
      title: "Beauty",
      artist: "eyeroze",
      album: "Heartless",
      track: "4",
      year: "",
      img_src: "./songs_images/Beauty_Cover (front)_e.jpg",
      src: "./songs/Beauty.mp3",
    },
    {
      title: "Better Than He Can",
      artist: "Jennifer Flores",
      album: " Shiloh Dynasty",
      track: " LofiCentral",
      year: "All My Love",
      img_src: "./songs_images/Better Than He Can_Cover (front)_e.jpg",
      src: "./songs/Better Than He Can.mp3",
    },
    {
      title: "Break My Heart Again",
      artist: "90degrees",
      album: "Break My Heart Again",
      track: "1",
      year: "",
      img_src: "./songs_images/Break My Heart Again_Cover (front)_e.jpg",
      src: "./songs/Break My Heart Again.mp3",
    },
    {
      title: "Brightness",
      artist: "eyeroze",
      album: "Heartless",
      track: "15",
      year: "",
      img_src: "./songs_images/Brightness_Cover (front)_e.jpg",
      src: "./songs/Brightness.mp3",
    },
    {
      title: "Call me",
      artist: "90sFlav",
      album: "Collection",
      track: "1",
      year: "",
      img_src: "./songs_images/Call me_Cover (front)_e.jpg",
      src: "./songs/Call me.mp3",
    },
    {
      title: "Can We Kiss Forever?",
      artist: "Kina",
      album: " Adriana Proenza",
      track: "Can We Kiss Forever?",
      year: "1",
      img_src: "./songs_images/Can We Kiss Forever _Cover (front)_e.jpg",
      src: "./songs/Can We Kiss Forever .mp3",
    },
  ]);

  const code = new URLSearchParams(window.location.search).get("code")
//   const { code } = useParams();
  console.log(code);
  const accessToken = useAuth(code);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  const getTracks = () => {
    fetch(
      `https://v1.nocodeapi.com/super_lemon21/spotify/VNDQWNQbbUyPRTpj/browse/featured`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  getTracks();

  return (
    <div className="homepage">
      <Sidenav />
      <div className="spacerHorizontal"></div>
      <div className="home">
        <div className="header">
          <div className="userButton ">
            <div className="userIcon"></div>
            mirandashaekelley
          </div>
        </div>
        <div className="heading1">Good Morning, mirandashaekelley</div>
        <div className="spacer"></div>
        <div className="heading2">Recently Played</div>
        <div className="mini-spacer"></div>
        <div className="playedContainer">
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        accessToken={accessToken}
      />
    </div>
  );
}
