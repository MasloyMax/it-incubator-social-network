import React from "react";
import styleProfile from "../../CssComponents/ProfileCss/Profile.module.css";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "../../comoponents/Profile/ProfileAvatarContent";
import CreatePosts from "./Posts/CreatePosts";
import FeedPosts from "./Posts/FeedPosts";


const Profile = () => {
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent name='MasloyMax' data='12.01.1994'
                                  city='Voronezh' education='Heaigth'
                                  website="it's him"/>
            <CreatePosts/>
            <FeedPosts like={1} text = 'i am web developer is react and TypeScript'/>
            <FeedPosts like={2} text = 'My name is Max'/>
            <FeedPosts like={3} text = 'hello, my social network!'/>
        </div>
    )
}

export default Profile;