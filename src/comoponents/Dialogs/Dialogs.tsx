import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

let nameData = [{name: 'Dimysh', id: '1'},
    {name: 'Tanya', id: '2'},
    {name: 'KOla', id: '3'},
    {name: 'Misha', id: '4'},
]//данные имён
let MassageData = [
    {massage: 'hi', id: '1'},
    {massage: 'hihi', id: '2'},
    {massage: 'hi is', id: '3'},
]//данные сообщений

let dialogsElements = nameData
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
let messegesElemnt = MassageData
    .map((element) => <DialogsMassage massage={element.massage} id={element.id}/>);

type DialogItemPropsType = {
    name: string
    id: string
}//обозначаем тип пропсов в метод DialogItems
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={StyleDialogs.dialogs_items}>
            <NavLink to={path}
                     className={person => person.isActive ? StyleDialogs.active : StyleDialogs.dialogs_items}>{props.name} </NavLink>
        </div>
    )
}//метод

type DialogMassagePropsType = {
    massage: string
    id: string
}//обозначаем тип пропсов в метод DialogsMassage
const DialogsMassage = (props: DialogMassagePropsType) => {
    let massage = props.massage;
    return (
        <div className={StyleDialogs.massage}>
            {massage}
        </div>
    )
}//метод

const Dialogs = (props: any) => {
    return (
        <div className={StyleDialogs.dialogs}>
            <div className={StyleDialogs.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={StyleDialogs.massage}>
                {messegesElemnt}
            </div>
        </div>

    )
}//родительский метод, который вызывает DialogItems и DialogsMassage с данными из nameData и MassageData

export default Dialogs;