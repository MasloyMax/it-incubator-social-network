import React from "react";
import StyleDialogs from "./Dialogs.module.css"

const Dialogs = (props: any) => {
    return (
        <div className={StyleDialogs.dialogs}>
            <div className={StyleDialogs.dialogs_items}>
                <div className={StyleDialogs.dialogs_items}>
                    Dimysh
                </div>
                <div className={StyleDialogs.dialogs_items}>
                    Andrew
                </div>
                <div className={StyleDialogs.dialogs_items}>
                    Kola
                </div>
                <div className={StyleDialogs.dialogs_items}>
                    Tanya
                </div>
            </div>
            <div className={StyleDialogs.massage}>
                <div className={StyleDialogs.massage}>
                    hi
                </div>
                <div className={StyleDialogs.massage}>
                    hihi
                </div>
                <div className={StyleDialogs.massage}>
                    hi is
                </div>
            </div>
        </div>
    )
}

export default Dialogs;