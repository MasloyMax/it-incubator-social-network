import React from "react";
import styleProfile from "../../CssComponents/ProfileCss/Profile.module.css";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "../../comoponents/Profile/ProfileAvatarContent";
import Posts from "../Posts/Posts";


const Profile = () => {
    return (
        <div className={styleProfile.content}>
            <ProfileHeaderContent/>
            <ProfileAvatarContent/>
            <Posts/>
        </div>
    )
}

export default Profile;