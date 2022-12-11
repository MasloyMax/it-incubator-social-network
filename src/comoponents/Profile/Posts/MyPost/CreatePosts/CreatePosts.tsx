import React from "react";
import StylePost from './Posts.module.css'
import StyleFeedPosts from "../FeedPosts/FeedPosts.module.css";
import {addPostActionCreator, addPostChange} from "../../../../../Redux/Reduser/profileReduser";

const CreatePosts = (props: any) => {
    let createElementPost: any = React.createRef()

    let addPost: any = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = createElementPost.current.value
        let action = addPostChange(text)
        props.dispatch(action)
    }

    return (
        <div className={StylePost.block_post}>
            <div>
                <div>
                    <p>My posts</p>
                </div>
                <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                <textarea ref={createElementPost}
                          className={StylePost.post_input}
                          value={props.newPostText}
                          placeholder='your news...'
                          onChange={onPostChange}/>
                </form>
                <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                    <button onClick={addPost} className={StylePost.button_send} value="Click" type="button">send
                    </button>
                </form>
            </div>
            <div>
                <h2 className={StyleFeedPosts.title}>New posts</h2>
            </div>
        </div>
    )
}

export default CreatePosts;