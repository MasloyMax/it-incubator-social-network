const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MASSAGE = 'SEND-MASSAGE'

let stateInitiation = {
    massagesPage: {
        names: [{name: 'Dimysh', id: '1'},
            {name: 'Tanya', id: '2'},
        ],
        massages: [
            {massage: 'Hello', id: '1'},
        ],
        newMassageBody: '',
    },
}

const dialogsReduser = (state:any = stateInitiation, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.massagesPage.newMassageBody = action.body
            console.log(state)
            return state
        case SEND_MASSAGE:
            let body: any = state.massagesPage.newMassageBody
            state.massagesPage.newMassageBody = ''
            state.massagesPage.massages.push({massage: body, id: '7'})
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