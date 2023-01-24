import React, {ChangeEvent} from "react";
import StyleDialogs from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import DialogsMassage from "./Massage/Massage";
import {DialogsReducerType} from "../../Redux/Reduser/dialogsReduser";

type PropsType = {
    onSendMassageClick: () => void
    onNewMassageChange: (body: string) => void
    state: DialogsReducerType
}

const Dialogs = (props: PropsType) => {
    let createElementName = props.state.names.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let createMassege = props.state.messages.map((m) => <DialogsMassage massage={m.message} id={m.id}/>);
    let newMassageBody = props.state.newMessageBody

    let onSendMassageClick = () => {
        props.onSendMassageClick()
    }

    let onNewMassageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.onNewMassageChange(body);
    }
    return (
        <div className={StyleDialogs.dialogs}>
            <div className={StyleDialogs.dialogs_items}>
                {createElementName}
            </div>
            <div className={StyleDialogs.massage}>
                <div>{createMassege}</div>
                <div>
                      <textarea className={StyleDialogs.massage_input_text}
                                placeholder={'Enter your massage'}
                                value={newMassageBody}
                                onChange={onNewMassageChange}/>
                    <div>
                        <button onClick={onSendMassageClick}
                                className={StyleDialogs.button_style}>Отправить сообщение
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;