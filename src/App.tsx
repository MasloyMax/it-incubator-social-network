import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./comoponents/Header/Header";
import NavMenu from "./comoponents/NavMenu/NavMenu";
import Profile from "./comoponents/Profile/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavMenu/>
            <Profile/>
        </div>
    );
}

export default App;
