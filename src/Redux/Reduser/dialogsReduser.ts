const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MASSAGE = 'SEND-MASSAGE'

const dialogsReduser = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.newMassageBody = action.body
            return state
        case SEND_MASSAGE:
            let body: any = state.newMassageBody
            state.newMassageBody = ''
            state.massages.push({massage: body, id: '7'})
            return state

        default:
            return state
    }
}

export const addMassageCreator = () => {
    return {type: SEND_MASSAGE}
}
export const updateNewMessageBodyCreator = (body: any) => {
    return {type: UPDATE_NEW_MASSAGE_BODY, body: body}
}

export default dialogsReduser