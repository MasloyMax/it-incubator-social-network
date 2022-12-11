import React from "react";
import StyleDialogs from "./../Dialogs.module.css"

type TypeDialogsMassage = {
    massage: string
    id: number
}

const DialogsMassage = (props: TypeDialogsMassage) => {
    let massage = props.massage;
    return (
        <div className={StyleDialogs.massage}>
            {massage}
        </div>
    )
}

export default DialogsMassage;

