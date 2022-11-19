import React from "react";
import StylePost from '../../CssComponents/PostsCss/Posts.module.css'

const Posts = () => {
    return (
        <div className={StylePost.block_post}>
            <div>
                <div>
                    <p>My posts</p>
                </div>
                <form action="src/comoponents/Posts/Posts">
                    <input className={StylePost.post_input} type="text" placeholder='your news...'/>
                </form>
                <form action="src/comoponents/Posts/Posts">
                    <button className={StylePost.button_send}>send</button>
                </form>
            </div>
            <div>
                New posts
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>

    )
}

export default Posts;