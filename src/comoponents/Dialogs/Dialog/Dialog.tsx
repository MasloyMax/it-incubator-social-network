import React from "react";
import StyleDialogs from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={StyleDialogs.dialogs_items}>
            <NavLink to={path}
                     className={person => person.isActive ? StyleDialogs.active : StyleDialogs.dialogs_items}>{props.name} </NavLink>
        </div>
    )
}//метод

export default DialogItem;