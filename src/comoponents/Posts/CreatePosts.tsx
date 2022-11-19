import React from "react";
import StylePost from '../../CssComponents/PostsCss/Posts.module.css'
import StyleFeedPosts from "../../CssComponents/PostsCss/FeedPosts.module.css";

const CreatePosts = () => {
    return (
        <div className={StylePost.block_post}>
            <div>
                <div>
                    <p>My posts</p>
                </div>
                <form action="src/comoponents/Posts/CreatePosts.tsx">
                    <input className={StylePost.post_input} type="text" placeholder='your news...'/>
                </form>
                <form action="src/comoponents/Posts/CreatePosts.tsx">
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