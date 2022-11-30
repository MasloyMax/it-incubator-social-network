import React from "react";
import StyleFriands from './Friends.module.css'

const Friends = (props: any) => {
    return (
        <div>
            <div>
                <a href="" className={StyleFriands.link}>
                    <img className={StyleFriands.image_ava}
                         src={'https://kartinkin.net/uploads/posts/2022-03/thumbs/1648169390_3-kartinkin-net-p-chelovek-bez-litsa-kartinki-3.png'}/>
                    <p className={StyleFriands.text_name}>{props.name}</p>
                </a>
            </div>
        </div>
    )
}

export default Friends