import React from "react";
import CreatePosts from "./CreatePosts/CreatePosts";
import FeedPosts from "./FeedPosts/FeedPosts";
import {updateChangePostText} from "../../../../Redux/state";

const MyPost = (props: any) => {
    let createFeedpost = props.posts.map((b:any) => <FeedPosts text={b.text} like={b.like} />)
    return (
        <div>
            <CreatePosts addPostNew={props.addPostNew}
                         posts={props.posts}
                         updateChangePostText={props.updateChangePostText}/>
            {createFeedpost}
        </div>
    )
}

export default MyPost;