import React from "react";
import CreatePosts from "./CreatePosts/CreatePosts";
import FeedPosts from "./FeedPosts/FeedPosts";

const MyPost = (props: any) => {
    let createFeedpost = props.posts.map((b:any) => <FeedPosts text={b.text} like={b.like} />)
    return (
        <div>
            <CreatePosts addPostNew={props.addPostNew} posts={props.posts}/>
            {createFeedpost}
        </div>
    )
}

export default MyPost;