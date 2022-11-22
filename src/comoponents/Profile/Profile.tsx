import React from "react";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "./ProfileAvatarContent/ProfileAvatarContent";
import MyPost from "./Posts/MyPost/MyPost";


const Profile = (props:any) => {
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent/>
            <MyPost posts={props.posts}/>
        </div>
    )
}

export default Profile;