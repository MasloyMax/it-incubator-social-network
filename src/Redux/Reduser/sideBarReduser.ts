type NamesFriendsType ={
    name:string
}

type StateInitiationType = {
    sitebar: NamesFriendsType
}

let stateInitiation = {
    sitebar: {
        namesFriends: [
            {name: 'Andrew'},
            {name: 'Sasha'},
            {name: 'Sveta'},
        ]
    }
}

const sideBarReduser = (state:any = stateInitiation , action: any) => {

    return state
}

export default sideBarReduser
