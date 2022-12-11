import React from "react";
import CreatePosts from "./CreatePosts/CreatePosts";
import FeedPosts from "./FeedPosts/FeedPosts";

const MyPost = (props: any) => {
    let createFeedpost = props.state.postsPage.map((b:any) => <FeedPosts text={b.text} like={b.like} />)
    console.log(props)
    return (
        <div>
            <CreatePosts dispatch={props.dispatch}
                         state={props.state.postsPage}/>
            {createFeedpost}
        </div>
    )
}

export default MyPost;