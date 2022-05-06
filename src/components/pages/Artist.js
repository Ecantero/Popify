import React from "react";

export default function Artist() {
    return(
        <div className="artistPage">
            <div className="bannerBack">
                <h5>Verified?</h5>
                <h1>Artist Name</h1>
                <h6>0 Monthly Listeners</h6>
            </div>
            <div className="songList">
                <h3>Play Button</h3>
                <div className="songs">
                    <h4>Songs Go Here</h4>
                </div>
                <div className="discography">
                    <h4>Albums Go here</h4>
                </div>
            </div>
        </div>
    )
}