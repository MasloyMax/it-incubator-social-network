import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./comoponents/Header/Header";
import NavMenu from "./comoponents/NavMenu/NavMenu";
import Profile from "./comoponents/Profile/Profile";
import Dialogs from "./comoponents/Dialogs/Dialogs";
import Music from "./comoponents/Music/Music";
import News from "./comoponents/News/News";
import Settings from "./comoponents/Settings/Settings";


function App(props: any) {

    let dialogCompany = <Dialogs names={props.names} massages={props.massages}/>;
    let profileCompany = <Profile posts={props.posts} PropsProfile={props.PropsProfile}/>;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavMenu/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={dialogCompany}/>
                        <Route path="/profile" element={profileCompany}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
