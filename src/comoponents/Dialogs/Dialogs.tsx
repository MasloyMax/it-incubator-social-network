import React from "react";
import StyleDialogs from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import DialogsMassage from "./Massage/Massage";
import  {addMassageCreator, updateNewMessageBodyCreator} from "../../Redux/state";

const Dialogs = (props: any) => {
    let createElementName = props.state.names.map((d: any) => <DialogItem name={d.name}id={d.id}/>);
    let createMassege = props.state.massages.map((m: any) => <DialogsMassage massage={m.massage} id={m.id}/>);
    let newMassageBody = props.state.newMassageBody

    let onSendMassageClick = () =>{
        props.dispatch(addMassageCreator())
    }

    let onNewMassageChange = (e:any) => {
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
}//родительский метод, который вызывает DialogItems и DialogsMassage с данными из nameData и MassageData

export default Dialogs;