import React from "react";
import StyleDialogs from "./../Dialogs.module.css"


const DialogsMassage = (props: any) => {
    let massage = props.massage;
    return (
        <div className={StyleDialogs.massage}>
            {massage}
        </div>
    )
}//метод

export default DialogsMassage;

