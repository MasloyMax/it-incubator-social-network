import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./comoponents/Profile/Header/Header";
import NavMenu from "./comoponents/Profile/NavMenu/NavMenu";
import Profile from "./comoponents/Profile/Profile";
import Dialogs from "./comoponents/Dialogs/Dialogs";
import Music from "./comoponents/Music/Music";
import News from "./comoponents/News/News";
import Settings from "./comoponents/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavMenu/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/massages' element={<Dialogs/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
