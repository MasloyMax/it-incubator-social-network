import React from "react";
import StyleFeedPosts from "../../../CssComponents/PostsCss/FeedPosts.module.css"

let postData = [
    {id: 1, text: 'i am web developer is react and TypeScript', like: '1'},
    {id: 2, text: 'My name is Max', like: '2'},
    {id: 4, text: 'hello, my social network!', like: '3'}
]

let generationFeedPosts = postData
    .map((el) => <FeedPosts text={el.text} like={el.like}/>);

const FeedPosts = (props: any) => {
    return (
        <div>
            {generationFeedPosts};
        </div>
    )
}

export default FeedPosts;