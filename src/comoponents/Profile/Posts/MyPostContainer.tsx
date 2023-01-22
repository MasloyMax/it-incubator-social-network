import React from "react";
import MyPost from "./MyPost/MyPost";
import {addPostActionCreator, addPostChange} from "../../../Redux/Reduser/profileReduser";
import CreatePosts from "./MyPost/CreatePosts/CreatePosts";
import {AppDispatchType, AppStateType} from "../../../Redux/redux-store";

type PropsType = {
    state: AppStateType
    dispatch: AppDispatchType
    newText: string
}

const MyPostContainer = (props: PropsType) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = addPostChange(text)
        props.dispatch(action)
    }
    return (
        <div>
            <CreatePosts onPostChange={onPostChange} addPost={addPost}
                         posts={props.state.profileReduser.profilePage.postsPage}
                         newText={props.newText}/>
        </div>
    )
}

export default MyPostContainer;