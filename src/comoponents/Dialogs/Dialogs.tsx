import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

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

let nameData = [{name: 'Dimysh', id: '1'},
    {name: 'Tanya', id: '2'},
    {name: 'KOla', id: '3'},
    {name: 'Misha', id: '4'},
    {name: 'Valera', id: '5'},
    {name: 'Dima', id: '6'}
]//данные имён

let MassageData = [
    {massage: 'Hello', id: '1'},
    {massage: 'Hello Hello', id: '2'},
    {massage: 'Hello Hello Hello Hello', id: '3'},
    {massage: 'Hello HelloHello HelloHello Hello', id: '4'},
    {massage: 'Hello HelloHello HelloHello HelloHello Hello', id: '5'},
    {massage: 'Hello HelloHello HelloHello HelloHello HelloHello Hello', id: '6'},
]//данные сообщений

let createElementName = nameData.map((d) => <DialogItem name={d.name} id={d.id}/>);
let createMassege = MassageData.map((m) => <DialogsMassage massage={m.massage} id={m.id}/>);


const Dialogs = (props: any) => {
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