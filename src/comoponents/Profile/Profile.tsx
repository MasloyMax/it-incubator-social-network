import React from "react";
import styleProfile from "../../CssComponents/ProfileCss/Profile.module.css";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "../../comoponents/Profile/ProfileAvatarContent";
import CreatePosts from "../Posts/CreatePosts";
import FeedPosts from "../Posts/FeedPosts";


const Profile = () => {
    return (
        <div className={styleProfile.content}>
            <ProfileHeaderContent/>
            <ProfileAvatarContent/>
            <CreatePosts/>
            <FeedPosts/>
            <FeedPosts/>
            <FeedPosts/>
        </div>
    )
}

export default Profile;