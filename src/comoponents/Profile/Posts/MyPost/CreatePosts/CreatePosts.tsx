import React, {createRef} from "react";
import StylePost from './Posts.module.css'
import StyleFeedPosts from "../FeedPosts/FeedPosts.module.css";
import {addPostActionCreator, addPostChange, PostsPageType} from "../../../../../Redux/Reduser/profileReduser";
import {AppStateType} from "../../../../../Redux/redux-store";

type PropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
    newText: string
    posts: PostsPageType[]
}

const CreatePosts = (props: PropsType) => {

    const {onPostChange,addPost} = props

    let createElementPost:any= React.createRef()

    let addPostHandler = () => {
        addPost()
    }

    let onPostChangeHandler = () => {
        if(createElementPost.current){
            let newPostText = createElementPost.current.value
            onPostChange(newPostText)
        }

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
                          value={props.newText}
                          placeholder='your news...'
                          onChange={onPostChangeHandler}/>
                </form>
                <form action="src/comoponents/Profile/Posts/MyPost/CreatePosts/CreatePosts.tsx">
                    <button onClick={addPostHandler} className={StylePost.button_send} value="Click" type="button">send
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