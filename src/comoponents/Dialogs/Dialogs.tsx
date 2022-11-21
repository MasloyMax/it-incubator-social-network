import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={StyleDialogs.dialogs_items}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type DialogMassageProprType = {
    massage: string
}
const DialogsMassage = (props: DialogMassageProprType) => {
    let massage = props.massage;
    return (
        <div className={StyleDialogs.massage}>
            {massage}
        </div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={StyleDialogs.dialogs}>
            <div className={StyleDialogs.dialogs_items}>
                <DialogItem name={"Dimysh"} id={'1'}/>
                <DialogItem name={"Tanya"} id={'2'}/>
                <DialogItem name={"KOla"} id={'3'}/>
                <DialogItem name={"Misha"} id={''}/>
            </div>
            <div className={StyleDialogs.massage}>
                <DialogsMassage massage={'hi'}/>
                <DialogsMassage massage={'hihi'}/>
                <DialogsMassage massage={'hi is'}/>
            </div>
        </div>

    )
}

export default Dialogs;