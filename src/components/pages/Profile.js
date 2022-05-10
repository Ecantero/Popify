import React from "react";

export default function Profile() {
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
        </div>
    )
}