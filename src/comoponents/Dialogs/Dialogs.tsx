import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import DialogsMassage from "./Massage/Massage";
import dialogsReduser, {addMassageCreator, updateNewMessageBodyCreator} from "../../Redux/Reduser/dialogsReduser";

const Dialogs = (props: any) => {
    let dialogState = props.store.getState().dialogsReduser.massagesPage

    let createElementName = dialogState.names.map((d: any) => <DialogItem name={d.name}id={d.id}/>);
    let createMassege = dialogState.massages.map((m: any) => <DialogsMassage massage={m.massage} id={m.id}/>);
    let newMassageBody = dialogState.newMassageBody

    let onSendMassageClick = () =>{
        props.store.dispatch(addMassageCreator())
    }

    let onNewMassageChange = (e:any) => {
        let body = e.target.value;
        console.log(body)
        props.store.dispatch(updateNewMessageBodyCreator(body));
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