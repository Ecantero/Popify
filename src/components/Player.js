import React, {useState, useEffect, useRef} from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    };

    return (
        <>
        <div className="musicBar">
            <p>
                <div className="text-anim">
                    <strong>Upcoming Song:</strong>
                </div>
                <div className="music-player">
                    <div className="nextsong-details">
                            <PlayerDetails song={props.songs[props.currentSongIndex]} />
                            <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
                            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                            <div className="upcomingsong">
                            <img src={props.songs[props.nextSongIndex].img_src} alt={props.songs[props.nextSongIndex].title} crossOrigin="anonymous" style={{ width: "4em", height: "auto" }} />
                        <p>
                            <b>{props.songs[props.nextSongIndex].title} </b>&nbsp; by&nbsp;
                            <b>{props.songs[props.nextSongIndex].artist}</b>
                        </p>
                        </div>
                    </div>
                </div>
            </p>
            </div>
        </>
    );
}

export {Player};