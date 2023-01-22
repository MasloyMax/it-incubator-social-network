import React from "react";
import CreatePosts from "./CreatePosts/CreatePosts";
import FeedPosts from "./FeedPosts/FeedPosts";
import {AppDispatchType, AppStateType, AppstoreType} from "../../../../Redux/redux-store";
import MyPostContainer from "../MyPostContainer";

type PropsType = {
   store: AppstoreType
}

const MyPost = (props: PropsType) => {
    let createFeedPost = props.store.getState().profileReduser.profilePage.postsPage.map((b: any) => <FeedPosts text={b.text} like={b.like}/>)
    return (
        <div>
            <MyPostContainer
                dispatch={props.store.dispatch}
                state={props.store.getState()}
                newText={props.store.getState().profileReduser.profilePage.newPostText}/>
            {createFeedPost}
        </div>
    )
}

export default MyPost;