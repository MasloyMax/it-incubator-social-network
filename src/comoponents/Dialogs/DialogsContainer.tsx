import React, {ChangeEvent} from 'react';
import {
    addMassageCreator,
    updateNewMessageBodyCreator
} from "../../Redux/Reduser/dialogsReduser";
import {AppDispatchType, AppstoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";


type PropsType = {
    store: AppstoreType
    dispatch: AppDispatchType
}

const DialogsContainer = (props: PropsType) => {

    let onSendMassageClick = () => {
        props.store.dispatch(addMassageCreator())
    }

    let onNewMassageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div>
            <Dialogs onSendMassageClick={onSendMassageClick}
                     onNewMassageChange={onNewMassageChange}
                     state={props.store.getState().dialogsReduser.messagesPage}/>
        </div>
    );
};

export default DialogsContainer;