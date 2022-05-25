import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Artist from '../components/pages/Artist';
import Details from '../components/pages/Details';
import Homepage from '../components/pages/Homepage';
import Landing from '../components/pages/Landing';
import Login from '../components/pages/Login';
import Profile from '../components/pages/Profile';
import Search from '../components/pages/Search';
import Signup from '../components/pages/Signup';
import SpotifyLogin from "../components/pages/SpotifyLogin";

export function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/Home" element={<Homepage />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Signup" element={<Signup />}/>
                <Route path="/Search" element={<Search />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/Artist" element={<Artist />}/>
                <Route path="/Details" element={<Details />}/>
                <Route path="/SpotifyLogin" element={<SpotifyLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

