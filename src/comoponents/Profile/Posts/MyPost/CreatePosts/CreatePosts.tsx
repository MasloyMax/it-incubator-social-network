import React from "react";
import StylePost from './Posts.module.css'
import StyleFeedPosts from "../FeedPosts/FeedPosts.module.css";

const CreatePosts = (props: any) =>{

    let createElementPost:any = React.createRef();
    let addPost:any = () =>{
        let text:any = createElementPost.current.value;
        alert(text)
    }
    return (
    <div className={StylePost.block_post}>
        <div>
            <div>
                <p>My posts</p>
            </div>
            <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                <textarea ref={createElementPost} className={StylePost.post_input} placeholder='your news...' />
            </form>
            <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
                <button onClick={addPost}  className={StylePost.button_send}>send</button>
            </form>
        </div>
        <div>
            <h2 className={StyleFeedPosts.title}>New posts</h2>
        </div>
    </div>
)
}

export default CreatePosts;