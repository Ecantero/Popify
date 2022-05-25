import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faForward,
    faBackward,
} from '@fortawesome/free-solid-svg-icons';

function PlayerControls(props) {
    return (
        <div className="music-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)} style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <buton className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </buton>
            <button className="skip-btn" onClick={() => props.SkipSong()} style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    );
}

export default PlayerControls;