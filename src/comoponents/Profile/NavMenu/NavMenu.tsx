import React from "react";
import styleNavMenu from '../../../CssComponents/NavMenuCss/NavMenu.module.css';

const NavMenu = () => {
    return (
        <nav className={styleNavMenu.nav}>
            <div className={styleNavMenu.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={styleNavMenu.item}>
                <a href="/dialogs">Massages</a>
            </div>
            <div className={styleNavMenu.item}>
                <a href="/news">News</a>
            </div>
            <div className={styleNavMenu.item}>
                <a href="/music">Music</a>
            </div>
            <div className={styleNavMenu.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default NavMenu;