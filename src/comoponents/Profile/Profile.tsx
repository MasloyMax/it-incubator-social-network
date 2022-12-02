import React from "react";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "./ProfileAvatarContent/ProfileAvatarContent";
import MyPost from "./Posts/MyPost/MyPost";

const Profile = (props:any) => {
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent profile={props.state.propsProfile}/>
            <MyPost posts={props.state.postsPage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;