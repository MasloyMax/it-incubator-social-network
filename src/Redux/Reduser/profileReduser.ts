const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type PostsPageType = {
    id: number
    text: string
    like: string
}

type PropsProfileType = {
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

type ProfileType = {
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

const profileReduser = (state:any = stateInitiation, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: any = {
                id: 10,
                text: state.profilePage.newPostText,
                like: 0
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
export const addPostChange = (text: any) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReduser
