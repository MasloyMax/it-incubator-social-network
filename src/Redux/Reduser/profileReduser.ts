const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReduser = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: any = {
                id: 10,
                text: state.newPostText,
                like: 0
            };
            state.postsPage.push(newPost)
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export default profileReduser
