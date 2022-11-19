import React from "react";
import StyleFeedPosts from "../../CssComponents/PostsCss/FeedPosts.module.css"

const FeedPosts = () => {
    return (
        <div>
            <div className={StyleFeedPosts.item}>
                <div>
                    <p>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5faVszR5XQKwYrgak66d8QDijo5m739aLfQ&usqp=CAU"
                            alt=""/>
                        post 1
                    </p>
                </div>
                <div>
                    <span>
                      <button>like</button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default FeedPosts;