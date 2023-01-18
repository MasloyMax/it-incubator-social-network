import React, {ChangeEvent} from "react";
import StyleDialogs from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import DialogsMassage from "./Massage/Massage";
import dialogsReduser, {
    addMassageCreator, DialogsReducerType,
    MessagesPageType,
    updateNewMessageBodyCreator
} from "../../Redux/Reduser/dialogsReduser";
import {AppDispatchType, AppStateType, AppstoreType} from "../../Redux/redux-store";
import {ProfileType} from "../../Redux/Reduser/profileReduser";

type PropsType = {
    dispatch: AppDispatchType
    state: AppStateType
}

const Dialogs = (props: PropsType) => {
    let createElementName = props.state.dialogsReduser.messagesPage.names.map((d) => <DialogItem name={d.name}id={d.id}/>);
    let createMassege = props.state.dialogsReduser.messagesPage.messages.map((m) => <DialogsMassage massage={m.message} id={m.id}/>);
    let newMassageBody = props.state.dialogsReduser.messagesPage.newMessageBody

    let onSendMassageClick = () =>{
        props.dispatch(addMassageCreator())
    }

    let onNewMassageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
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