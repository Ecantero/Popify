import React from "react";
import "./Signup.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ed8c5f5cbf984d1791368e0cd7bf97a5&response_type=code&redirect_uri=https://aws-host.d3021ujnmxl8cr.amplifyapp.com/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const SpotifyLogin = () => {
  return (
    <div className="formContainer">
      <a className="button" href={AUTH_URL}>
        Login with Spotify
      </a>
    </div>
  );
};

export default SpotifyLogin;
