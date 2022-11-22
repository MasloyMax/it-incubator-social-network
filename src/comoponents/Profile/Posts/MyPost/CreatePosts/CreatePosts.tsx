import React from "react";
import StylePost from './Posts.module.css'
import StyleFeedPosts from "../FeedPosts/FeedPosts.module.css";
import FeedPosts from "../FeedPosts/FeedPosts";

let PropsProfile = {
    name:'masloyMax',
    city:'Voronizh',
    education:'Heaigth',
    website: "it's him"
}

const CreatePosts = (props: any) =>{

return (
    <div className={StylePost.block_post}>
        <div>
            <div>
                <p>My posts</p>
            </div>
            <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                <input className={StylePost.post_input} type="text" placeholder='your news...'/>
            </form>
            <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                <button className={StylePost.button_send}>send</button>
            </form>
        </div>
        <div>
            <h2 className={StyleFeedPosts.title}>New posts</h2>
        </div>
    </div>
)
}

export default CreatePosts;