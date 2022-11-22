import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/Dialog";
import DialogsMassage from "./Massage/Massage";

let names = [{name: 'Dimysh', id: '1'},
    {name: 'Tanya', id: '2'},
    {name: 'KOla', id: '3'},
    {name: 'Misha', id: '4'},
    {name: 'Valera', id: '5'},
    {name: 'Dima', id: '6'}
]//данные имён

let massages = [
    {massage: 'Hello', id: '1'},
    {massage: 'Hello Hello', id: '2'},
    {massage: 'Hello Hello Hello Hello', id: '3'},
    {massage: 'Hello HelloHello HelloHello Hello', id: '4'},
    {massage: 'Hello HelloHello HelloHello HelloHello Hello', id: '5'},
    {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '6'},
]//данные сообщений

const Dialogs = (props: any) => {
    let createElementName = names.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let createMassege = massages.map((m) => <DialogsMassage massage={m.massage} id={m.id}/>);
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