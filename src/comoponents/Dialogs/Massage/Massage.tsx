import React from "react";
import StyleDialogs from "./../Dialogs.module.css"
import {massageCrator} from "../../../Redux/state";


const DialogsMassage = (props: any) => {
    let createMassge:any = React.createRef();
    let addMassage = () =>{
        let text = createMassge.current.value
        alert(text)
    }

    let onChangeMassage = () =>{
        let text:any = createMassge.current.value
        props.dispatch(massageCrator(text));
    }

    let massage = props.massage;
    return (
        <div className={StyleDialogs.massage}>
            {massage}
            <div>
                <textarea className={StyleDialogs.massage_input_text}
                          ref={createMassge} placeholder={'text'} onChange={onChangeMassage}/>
            </div>
            <div>
                <button onClick={addMassage} className={StyleDialogs.button_style}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default DialogsMassage;

