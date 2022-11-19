import React from "react";
import styleNavMenu from '../../CssComponents/NavMenuCss/NavMenu.module.css';

const NavMenu = () => {
    return (
        <nav className={styleNavMenu.nav}>
            <div className={styleNavMenu.item}>
                <a className='item' href="src/comoponents/NavMenu/NavMenu">Profile</a>
            </div>
            <div className={styleNavMenu.item}>
                <a className='item' href="src/comoponents/NavMenu/NavMenu">Massages</a>
            </div>
            <div className={styleNavMenu.item}>
                <a className='item' href="src/comoponents/NavMenu/NavMenu">News</a>
            </div>
            <div className={styleNavMenu.item}>
                <a className='item' href="src/comoponents/NavMenu/NavMenu">Music</a>
            </div>
            <div className={styleNavMenu.item}>
                <a className='item' href="src/comoponents/NavMenu/NavMenu">Settings</a>
            </div>
        </nav>
    )
}

export default NavMenu;