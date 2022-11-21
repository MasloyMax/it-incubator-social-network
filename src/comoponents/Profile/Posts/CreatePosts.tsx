import React from "react";
import StylePost from '../../../CssComponents/PostsCss/Posts.module.css'
import StyleFeedPosts from "../../../CssComponents/PostsCss/FeedPosts.module.css";
import FeedPosts from "./FeedPosts";

let postData = [
    {id: 1, text: 'i am web developer is react and TypeScript', like: '1'},
    {id: 2, text: 'My name is Max', like: '2'},
    {id: 4, text: 'hello, my social network!', like: '3'},
    {id: 4, text: 'hello, my social network!', like: '3'},
    {id: 4, text: 'hello, my social network!', like: '3'}
]

let crateElementPost = postData.map((el) => <FeedPosts text={el.text} like={el.like}/>);

const CreatePosts = () => {
    return (
        <div className={StylePost.block_post}>
            <div>
                <div>
                    <p>My posts</p>
                </div>
                <form action="src/comoponents/Profile/Posts/CreatePosts.tsx">
                    <input className={StylePost.post_input} type="text" placeholder='your news...'/>
                </form>
                <form action="src/comoponents/Profile/Posts/CreatePosts.tsx">
                    <button className={StylePost.button_send}>send</button>
                </form>
            </div>
            <div>
                <h2 className={StyleFeedPosts.title}>New posts</h2>
            </div>
            <div>
                {crateElementPost};
            </div>
        </div>
    )
}

export default CreatePosts;