import React from "react";
import CreatePosts from "./CreatePosts/CreatePosts";
import FeedPosts from "./FeedPosts/FeedPosts";

const MyPost = (props: any) => {
    let myPostsState = (props.store.getState().profileReduser.profilePage)
    let createFeedpost = myPostsState.postsPage.map((b:any) => <FeedPosts text={b.text} like={b.like} />)
    return (
        <div>
            <CreatePosts dispatch={props.dispatch}
                         posts={props.posts}/>
            {createFeedpost}
        </div>
    )
}

export default MyPost;