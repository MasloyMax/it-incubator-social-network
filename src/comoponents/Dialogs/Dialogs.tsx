import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/Dialog";
import DialogsMassage from "./Massage/Massage";
import state from "../../Redux/state";



const Dialogs = (props: any) => {
    let createElementName =
        props.state.names.map((d: any) => <DialogItem name={d.name} id={d.id}/>);
    let createMassege =
        props.state.massages.map((m: any) => <DialogsMassage massage={m.massage} id={m.id}/>);
    return (
        <div className={StyleDialogs.dialogs}>
            <div className={StyleDialogs.dialogs_items}>
                {createElementName}
            </div>
            <div className={StyleDialogs.massage}>
                {createMassege}
            </div>
        </div>
    )
}//родительский метод, который вызывает DialogItems и DialogsMassage с данными из nameData и MassageData

export default Dialogs;