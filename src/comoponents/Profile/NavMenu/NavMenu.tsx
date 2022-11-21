import React from "react";
import styleNavMenu from '../../../CssComponents/NavMenuCss/NavMenu.module.css';
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <nav className={`${styleNavMenu.nav} ${styleNavMenu.item}`}>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/profile" className={navData => navData.isActive ? styleNavMenu.active : styleNavMenu.item }>Profile</NavLink>
            </div>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/dialogs" className={Masseges => Masseges.isActive ? styleNavMenu.active : styleNavMenu.item }>Massages</NavLink>
            </div>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/news" className={News => News.isActive ? styleNavMenu.active : styleNavMenu.item }>News</NavLink>
            </div>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/music" className={Music => Music.isActive ? styleNavMenu.active : styleNavMenu.item }>Music</NavLink>
            </div>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/settings" className={Settings => Settings.isActive ? styleNavMenu.active : styleNavMenu.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavMenu;