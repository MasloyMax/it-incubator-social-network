const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ActionType = NewTextActionType | ChangeTextActionType

type NewTextActionType = {
    type: 'ADD-POST'
    newText: string
}

type ChangeTextActionType ={
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type PostsPageType = {
    id: number
    text: string
    like: string
}

export type PropsProfileType = {
    name:string
    data:string
    city:string
    education:string
    website:string
}

type postType = {
    postsPage: Array<PostsPageType>
    newPostText: string
    propsProfile: Array<PropsProfileType>
}

export type ProfileType = {
    profilePage: postType
}


let stateInitiation: ProfileType = {
    profilePage: {
        postsPage: [
            {id: 1, text: 'i am web developer is react and TypeScript', like: '1'},
        ],//данные постов
        newPostText: '',
        propsProfile: [{
            name: 'masloyMax',
            data: '12.01.1994',
            city: 'Voronizh',
            education: 'Heaigth',
            website: "it's him",
    }
        ],//данные профиля
    },
}

const profileReduser = (state:ProfileType = stateInitiation, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost:PostsPageType = {
                id: 10,
                text: state.profilePage.newPostText,
                like: '0'
            };
            state.profilePage.postsPage.push(newPost)
            return state
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const addPostChange = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReduser
