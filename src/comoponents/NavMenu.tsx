import React from "react";
import "./NavMenu.css";

const NavMenu = () => {
    return (
        <nav className='nav'>
            <div className='item'>
                <a href="">Profile</a>
            </div>
            <div>
                <a className='item' href="">Massages</a>
            </div>
            <div>
                <a className='item' href="">News</a>
            </div>
            <div>
                <a className='item' href="">Music</a>
            </div>
            <div>
                <a className='item' href="">Settings</a>
            </div>
        </nav>
    )
}

export default NavMenu;