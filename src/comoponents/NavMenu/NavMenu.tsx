import React from "react";
import styleNavMenu from './NavMenu.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import sideBarReduser from "../../Redux/Reduser/sideBarReduser";
import {AppstoreType} from "../../Redux/redux-store";

type PropsType = {
        store: AppstoreType
}

const NavMenu = (props:PropsType) => {
    let siteBarState = props.store.getState().sideBarReduser
    let createFriends = siteBarState.sitebar.namesFriends.map((b:any) => <Friends name={b.name} />)
    return (
        <nav className={`${styleNavMenu.nav} ${styleNavMenu.item}`}>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/profile" className={navData => navData.isActive ? styleNavMenu.active : styleNavMenu.item }>Profile</NavLink>
            </div>
            <div className={styleNavMenu.block_button}>
                <NavLink to="/dialogs" className={dialogs => dialogs.isActive ? styleNavMenu.active : styleNavMenu.item }>Massages</NavLink>
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
            <div>
                <h2>Friends</h2>
                <div className={styleNavMenu.container_friends}>
                    {createFriends}
                </div>
            </div>
        </nav>
    )
}
export default NavMenu;