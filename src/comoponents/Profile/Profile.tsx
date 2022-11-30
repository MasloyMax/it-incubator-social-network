import React from "react";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "./ProfileAvatarContent/ProfileAvatarContent";
import MyPost from "./Posts/MyPost/MyPost";
import {updateChangePostText} from "../../Redux/state";

const Profile = (props:any) => {
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent profile={props.state.propsProfile}/>
            <MyPost posts={props.state.postsPage}
                    addPostNew={props.addPostNew}
                    updateChangePostText={props.updateChangePostText}/>
        </div>
    )
}

export default Profile;