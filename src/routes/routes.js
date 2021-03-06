import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Player} from '../components/Player';

import AccountOverview from "../components/pages/AccountOverview";
import Artist from '../components/pages/Artist';
import Details from '../components/pages/Details';
import Homepage from '../components/pages/Homepage';
import Landing from '../components/pages/Landing';
import Login from '../components/pages/Login';
import Profile from '../components/pages/Profile';
import Search from '../components/pages/Search';
// import Signup from '../components/pages/Signup';
import Playlists from "../components/pages/Playlists";

export function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Homepage />}/>
                <Route path="AO/:aoId" element={<AccountOverview />} />
                <Route path="/Search" element={<Search />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/Artist" element={<Artist />}/>
                <Route path="/Details" element={<Details />}/>
                <Route path="/Playlists" element={<Playlists />}/>

                <Route path="/" element={<Landing />}/>
                <Route path="/Login" element={<Login />}/>
                {/* <Route path="/Signup" element={<Signup />}/> */}
            </Routes>
        </BrowserRouter>
    )
}

