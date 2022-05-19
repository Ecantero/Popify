import React from "react";

function PlayerDetails(props) {
    return (
        <div className="music-player--details">
                <img className="details-img--image" src={props.song.img_src} alt={props.song.title} style={{ width: "4em", height: "auto" }}/>
                <p>
                    <b className="details-title">{props.song.title}</b>&nbsp; by&nbsp;
                    <b className="details-artist">{props.song.artist}</b>
                </p>
        </div>
    );
}

export default PlayerDetails;