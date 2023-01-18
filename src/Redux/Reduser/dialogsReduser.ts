import {v1} from "uuid";

const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MASSAGE = 'SEND-MASSAGE'

type SendMessageActionType = {
    type: 'SEND-MASSAGE'
    body: string
}

type ChangeNewMessageActionType ={
    type: 'UPDATE-NEW-MASSAGE-BODY'
    body: string
}

export type DialogsActionType = ReturnType<typeof addMassageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

type ActionsType = SendMessageActionType | ChangeNewMessageActionType

type NamesType = {
    name: string
    id: string
}

type MessagesType = {
    message: string
    id: string
}

export type NewMessageBodyType ={
    newMessageBody: string
}

export type DialogsReducerType = {
    names: NamesType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type MessagesPageType ={
    messagesPage: DialogsReducerType
}

let stateInitiation: MessagesPageType = {
    messagesPage: {
        names: [
            {name: 'Tanya', id: v1()},
            {name: 'Dimysh', id: v1()},
        ],
        messages: [
            {message: 'Hello', id: v1()},
        ],
        newMessageBody: 'Ну'
    },
}

const dialogsReduser = (state:MessagesPageType = stateInitiation, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
           state.messagesPage.newMessageBody= action.body
            return state
        case SEND_MASSAGE:
            const body: string = state.messagesPage.newMessageBody
            state.messagesPage.newMessageBody = ''
            state.messagesPage.messages.push({message: body, id: '7'})
            return state

        default:
            return state
    }
}

export const addMassageCreator = () => {
    return {type: SEND_MASSAGE}
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {type: UPDATE_NEW_MASSAGE_BODY, body: body}
}

export default dialogsReduser