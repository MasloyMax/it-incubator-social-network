import React from "react";
import CreatePosts from "./CreatePosts/CreatePosts";
import FeedPosts from "./FeedPosts/FeedPosts";

const MyPost = (props: any) => {
    let createFeedPost = props.state.postsPage.map((b:any) => <FeedPosts text={b.text} like={b.like} />)
    return (
        <div>
            <CreatePosts dispatch={props.dispatch}
                         state={props.state.postsPage}/>
            {createFeedPost}
        </div>
    )
}

export default MyPost;